# Longhack team Bellerophon

## Wireframes

https://miro.com/app/board/uXjVPxwb4gQ=/?share_link_id=870121347472

## Next steps

* <strike> Back-end API template with FastAPI </strike>
* Create React App
  * <strike> Add build instructions </strike>
  * <strike> Add home screen </strike>
  * <strike> Add screenshots </strike>
  * <strike> Add multi-media </strike>
* Build wireframe components
* Create machine learning model

## About

The aging population is a growing trend in many parts of the world. This is due to a combination of factors, including advancements in medical technology and healthcare, which have led to increased life expectancy, and declining fertility rates, which have led to fewer births. As a result, there are now more older adults than ever before, and this demographic shift is having a significant impact on society, including healthcare, social security, and economic growth. Additionally, The World Health Organization (WHO) has declared that the older population is more vulnerable to chronic diseases such as heart disease, stroke, cancer, diabetes, and depression.

There are several causes of the aging population trend:

1. Medical advancements: Advances in medical technology and healthcare have led to increased life expectancy, allowing more people to live longer and healthier lives.

2. Declining fertility rates: Fewer births are occurring due to a variety of factors such as women choosing to have children later in life, increased access to birth control, and changes in societal attitudes towards childbearing.

3. Migration: Some countries are experiencing an aging population due to immigration patterns, with younger people leaving for better economic opportunities elsewhere.

4. Urbanization : Urbanization is also a cause of aging population, as people moving to cities tend to have fewer children and experience a higher standard of living, leading to increased life expectancy.

5. Changes in family structure: Changes in family structure, such as increased divorce rates and fewer children being born to single parents, are also contributing to the aging population trend.

The aging population can lead to a number of problems for individuals and society as a whole. Some examples include:

1. Healthcare: As the population ages, the demand for healthcare services increases, leading to a strain on the healthcare system. This is particularly true for chronic diseases such as heart disease, stroke, cancer, diabetes, and depression, which are more common in older adults. The aging population also puts pressure on healthcare professionals to keep up with new medical technologies and treatments.

2. Social Security: With fewer people of working age to support the older population, there is a risk that social security systems will become unsustainable. This could lead to a reduction in benefits or an increase in taxes for working-age individuals.

3. Economic Growth: An aging population can also lead to a slowdown in economic growth, as there will be fewer people of working age to fuel the economy. This could lead to a reduction in productivity and a decrease in the standard of living for everyone.

4. Loneliness and isolation: As people age, they may lose their social connections due to the death of loved ones, physical limitations, and other factors. This can lead to feelings of loneliness and isolation, which can have a negative impact on mental and physical health.

5. Housing and transportation: As older adults age, they may have difficulty living independently, which can lead to a need for specialized housing and transportation. This can be expensive and may not be readily available in all communities.

6. Care-giving: As the population ages, more people will require care-giving, which can put a strain on families and healthcare systems. This can lead to a greater demand for paid care-givers, which can be expensive and may not be readily available in all communities.

7. Mental Health: With aging, there is a greater risk of developing mental health conditions such as dementia and depression. These conditions can lead to a decline in quality of life and can be costly to treat.

8. Age discrimination: older adults may face discrimination in the workplace and in other areas of life due to their age. This can limit their ability to access employment and other opportunities, leading to a decline in quality of life and economic insecurity.

These are just a few examples of the problems that can arise with an aging population. It is important for society to take proactive measures to address these issues, such as developing policies and programs to support older adults, investing in healthcare and social security systems, and promoting healthy aging.


There are several potential benefits of an aging app for health status. Some examples include:

1. Tracking: An aging app can allow users to track important health information such as their weight, blood pressure, and heart rate. This can be helpful for monitoring changes over time and identifying potential health issues.

2. Reminders: An aging app can also provide reminders for important health-related tasks such as taking medication, scheduling doctor's appointments, and getting regular check-ups.

3. Education: An aging app can provide educational resources on various health topics such as healthy eating, exercise, and stress management.

4. Social Connectedness: An aging app can also provide social connectedness features such as virtual support groups and connecting with friends and family members. This can be especially beneficial for older adults who may be socially isolated due to factors such as mobility limitations or COVID-19 pandemic.

5. Monitoring: An aging app can also monitor the user's behavior, for example, monitoring falls, sleep, and activity levels, which can help detect potential health issues early and respond to them.

6. Remote Monitoring: An aging app can also allow doctors to monitor their patients' health remotely which can be beneficial for older adults who may have difficulty traveling to the doctor's office.

Overall, an aging app can be a useful tool for older adults to manage their health, stay informed and connected, and potentially improve overall health outcomes.

## Install the app

### Start back-end (FastAPI)

In order to run the build command for a project that uses Docker and Docker Compose, you must have both Docker and Docker Compose installed on your system. Docker is a platform for running containerized applications, and Docker Compose is a tool for defining and running multi-container Docker applications. Together, these tools allow you to build, run, and manage your application and its dependencies in a standardized and efficient way.

Here are the instructions for installing Docker and Docker Compose on a few popular operating systems:

* Windows:

1. Download the Docker Desktop installer from the Docker website.
2. Run the installer and follow the prompts to install Docker.
3. Verify that Docker is running by opening a command prompt and running the command `docker --version`.
4. Install Docker Compose by downloading the executable from the Docker website.
5. Move the executable to a directory that is in your system's PATH, such as `C:\Windows\System32`.
Verify that Docker Compose is installed by running the command `docker-compose --version`.

* macOS:

1. Download the Docker Desktop installer from the Docker website.
2. Run the installer and follow the prompts to install Docker.
3. Verify that Docker is running by opening a terminal and running the command `docker --version`.
4. Install Docker Compose by running the command brew install `docker-compose`.
5. Verify that Docker Compose is installed by running the command `docker-compose --version`.

* Ubuntu:

1. Update the package index by running the command `sudo apt-get update`.
2. Install Docker by running the command `sudo apt-get install -y docker.io`.
3. Verify that Docker is running by running the command `docker --version`.
4. Install Docker Compose by running the command `sudo apt-get install -y docker-compose`.
5. Verify that Docker Compose is installed by running the command `docker-compose --version`.

``Please note that depending on the version of your operating system, the commands might change.``

Once you have installed Docker and Docker Compose, you should be able to run the build command for your project.

```bash
docker-compose up -d --build
```

Update the image and then run the tests.

```bash
docker-compose up -d --build
docker-compose exec web pytest .
```

### React front-end build

Go to `src/frontend/`

```npm start
npm install
```

```bash
npm start
```

Test runner

```bash
npm run build
```

## Anotation tool and genomic dataset

Dataset download:

```bash
wget https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh37/clinvar.vcf.gz
```

Anotation tool can be found here https://pcingola.github.io/SnpEff/download/

```bash
wget https://snpeff.blob.core.windows.net/versions/snpEff_latest_core.zip
unzip snpEff_latest_core.zip
```

## Team

* Vasileios Alevizos
* Ilias Georgousis
* Clark Xu
* Mattheos Tasios
* Sergei Ryakhovsky
* Nikitas Gerolimos
* Dimitra Malliarou
