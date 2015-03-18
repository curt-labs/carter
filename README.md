Carter
========

This project is meant as a playground for the Shopping Cart API developed
by CURT Manufacturing. It's primarily a frontend AngularJS application
with a golang backend using [negroni](https://github.com/codegangsta/negroni),
[bone](https://github.com/squiidz/bone), and [render](https://github.com/unrolled/render).

It runs on Compute Engine using Instance Templates and Instance Groups with
the AutoScaler and HTTP Load Balancer to serve the content. Downside of doing it
this way is that currently you are required to have a local instance of
[boot2docker](http://boot2docker.io/) configured as
so [docker guide](https://docs.docker.com/installation/mac/).

Also the frontend is generated using the yeoman
[angular-require](https://github.com/aaronallport/generator-angular-require),
so you can use the generators in that package for creating Angular Controllers,
Services, Directives, Factories, etc.


### Compute Engine Elastic Deployment

Setup instance template
```shell
$ gcloud compute instance-templates create carter-template --image container-vm --scopes compute-rw stroage-full --metadata-from-file google-container-manifest=manifest.yaml --scopes https://www.googleapis.com/auth/devstorage.full_control https://www.googleapis.com/auth/compute
```

Setup instance group
```shell
$ gcloud preview managed-instance-groups --zone us-central1-f create carter-group --base-instance-name carter --template carter-template --size 4
```

Setup AutoScaler
```shell
$ gcloud preview autoscaler --zone us-central1-f create carter-autoscaler --target https://www.googleapis.com/replicapool/v1beta2/projects/curt-cart/zones/us-central1-f/instanceGroupManagers/carter-group --max-num-replicas 12 --min-num-replicas 1 --target-load-balancer-utilization .5
```

#### Load Balancer Setup

Create Health Check
```shell
$ gcloud compute http-health-checks create basic-check --port "80" --request-path "/" --check-interval "5" --timeout "5" --unhealthy-threshold "2" --healthy-threshold "2"
```

Create Backend Service with our Health Check
```shell
$ gcloud compute backend-services create web-service --http-health-check basic-check
```

Add the Backend Service to our instance group
```shell
$ gcloud compute backend-services add-backend web-service --group carter-group --zone us-central1-f
```

Create a URL map for our Backend Service
```shell
$ gcloud compute url-maps create web-map --default-service web-service
```

Create a proxy using our new URL map
```shell
$ gcloud compute target-http-proxies create web-proxy --url-map web-map
```

Add a forwarding rule
```shell
$ gcloud compute forwarding-rules create http-rule --global --target-http-proxy web-proxy --port-range 80
```

#### Rolling Update

A rolling update causes the service to gradually recreate your existing instances
with the new template. You can increase the number of instances updated
simultaneously with the --max-num-concurrent-instances flag. If you are not
sure you want to apply an update to all existing instances, you can use the
--num-canary-instances flag and the update will automatically be paused after
updating the number of instances specified. Afterwards, you can decide whether
to cancel or continue the update.

In case you notice your managed instance group misbehaving due to the new
template, you can roll back the update. This will stop the update from being
applied to more instances, and instances already created with the new template
will be recreated with the last template applied before the current update.

```shell
$ gcloud preview managed-instance-groups --zone us-central1-f start-rolling-update carter-group --template carter-template
```

#### Jenkins Deployment Server (Optional)
gcloud config set project bitnami-launchpad
```shell
$ export PROJECT_NAME=<project-id>
$ export JENKINS_PASS=<password>
$ gcloud compute \
    instances create bitnami-jenkins \
    --project $PROJECT_NAME \
    --image-project bitnami-launchpad \
    --image bitnami-jenkins-1-598-0-r01-linux-debian-7-x86-64 \
    --zone us-central1-a \
    --machine-type n1-standard-1 \
    --metadata "bitnami-base-password=${JENKINS_PASS}" \
               "bitnami-default-user=user" \
               "bitnami-key=jenkins" \
               "bitnami-name=Jenkins" \
               "bitnami-version=1-587-0" \
               "bitnami-url=//bitnami.com/stack/jenkins" \
               "bitnami-description=Jenkins." \
               "startup-script-url=http://storage.googleapis.com/jenkins-scripts/jenkins_start.sh" \
    --scopes "https://www.googleapis.com/auth/userinfo.email" \
             "https://www.googleapis.com/auth/devstorage.full_control" \
             "https://www.googleapis.com/auth/projecthosting" \
             "https://www.googleapis.com/auth/appengine.admin" \
             "https://www.googleapis.com/auth/compute" \
             "https://www.googleapis.com/auth/cloud-platform" \
    --tags "bitnami-launchpad"
```
