# Longhack Bellerophon



## Install the app

There are several potential benefits of an aging app for health status. Some examples include:

Tracking: An aging app can allow users to track important health information such as their weight, blood pressure, and heart rate. This can be helpful for monitoring changes over time and identifying potential health issues.

Reminders: An aging app can also provide reminders for important health-related tasks such as taking medication, scheduling doctor's appointments, and getting regular check-ups.

Education: An aging app can provide educational resources on various health topics such as healthy eating, exercise, and stress management.

Social Connectedness: An aging app can also provide social connectedness features such as virtual support groups and connecting with friends and family members. This can be especially beneficial for older adults who may be socially isolated due to factors such as mobility limitations or COVID-19 pandemic.

Monitoring: An aging app can also monitor the user's behavior, for example, monitoring falls, sleep, and activity levels, which can help detect potential health issues early and respond to them.

Remote Monitoring: An aging app can also allow doctors to monitor their patients' health remotely which can be beneficial for older adults who may have difficulty traveling to the doctor's office.

Overall, an aging app can be a useful tool for older adults to manage their health, stay informed and connected, and potentially improve overall health outcomes.

### Start back-end

Build docker image.

```bash
docker-compose up -d --build
```

Update the image and then run the tests.

```bash
docker-compose up -d --build
docker-compose exec web pytest .
```
