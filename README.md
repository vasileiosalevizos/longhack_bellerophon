# Longhack team Bellerophon

_The ageing population analysis is a growing trend in many parts of the world. This is due to a combination of factors, including advancements in medical technology and healthcare, which have led to increased life expectancy, and declining fertility rates, which have led to fewer births. As a result, there are now more older adults than ever before, and this demographic shift is having a significant impact on society, including healthcare, social security, and economic growth. Additionally, The World Health Organization (WHO) has declared that the older population is more vulnerable to chronic diseases such as heart disease, stroke, cancer, diabetes, and depression. Bellerophon is a web app and mobile application that calculates aging could be used to determine a person's age based on their birthdate. The user would enter their birthdate, and the app would calculate their current age and display it in years, months, and days. The app could also display the user's age in other units of time, such as hours or seconds. Additionally, the app could include features such as the ability to display a person's age on a specific date in the future, or to compare the ages of two people._

## Table of Contents

- [Content](#Content)
    - [Background](#Background)
    - [Application overview](#Application-overview)
      - [Wireframes](#Wireframes)
    - [Usage](#usage)
        - [Installation](#installation)
    - [Team Members](#team-members)


## Background

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


## Application overview

<img src="media/main_page.png" alt="main page" width="200"/>

<img src="media/medical_records.png" alt="medical records" width="200"/>

### Wireframes

https://miro.com/app/board/uXjVPxwb4gQ=/?share_link_id=870121347472



## Usage

### Installation

#### Start back-end (FastAPI)

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

#### API calls

| API call | Destination |
| ---------|------------|
| Ping | http://localhost:8002/ping |
| Swagger board | http://localhost:8002/docs |
| Post data | http://localhost:8002/notes |

#### Front-end build (with react)


Start front end:

```bash
cd src/frontend/
```

```bash
npm install
```

```bash
npm start
```
Go to local: http://localhost:3000 or on your network:  http://172.16.5.4:3000

Test runner

```bash
npm run build
```

#### Anotation tool and genomic dataset

You can use the `wget` command in a bash terminal to download dataset file from an FTP server. The basic syntax is:

```bash
wget https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh37/clinvar.vcf.gz
```

SnpEff is a program that annotates and predicts the effects of genetic variants on genes. The installation process for SnpEff will vary depending on the operating system you are using. Here are the general steps for installing SnpEff on different OS:

* Windows:
Download the SnpEff executable file from the SnpEff website.
Open the downloaded file and follow the prompts to install the program.

* Mac OS X:
Download the SnpEff executable file from the SnpEff website.
Open the downloaded file and follow the prompts to install the program.

* Linux:
Download the SnpEff executable file from the SnpEff website.
Open a terminal window and navigate to the directory where the downloaded file is located.
Use the command "chmod +x" to make the file executable
Run the file with "./"

```bash
wget https://snpeff.blob.core.windows.net/versions/snpEff_latest_core.zip
unzip snpEff_latest_core.zip
```

#### Start annotating data 

export SAMPLE="gh3665"
export HG="hg19"
export MEM="8"
#### prepare the file
java -jar snpEff/snpEff.jar ann -v hg19 ${SAMPLE}.vcf.gz | bgzip > ${SAMPLE}.ann.vcf.gz; tabix ${SAMPLE}.ann.vcf.gz

#### annotate by ClinVar database
java -Xmx${MEM}G -jar snpEff/SnpSift.jar annotate clinvar.vcf.gz ${SAMPLE}.ann.vcf.gz | bgzip > ${SAMPLE}.ann.clinvar.vcf.gz; tabix ${SAMPLE}.ann.clinvar.vcf.gz

#### Extrart disease and pathogeniciti status
bcftools view ${SAMPLE}.ann.clinvar.vcf.gz | grep -v "##" | grep "CLN" | perl -lane 'print join "\t",(@F[0..4], /(?:CLNSIG|CLNDN)=[^;]+/g)' > ${SAMPLE}.processed.clinvar.txt 


To install bcftools, you will first need to have the appropriate dependencies installed, including a C compiler (such as GCC) and zlib library. Once those dependencies are met, you can download the source code for bcftools from the official website (http://www.htslib.org/) and then follow these steps:

* Unpack the bcftools tarball using the command: `tar -xzf bcftools-version.tar.gz`
* Change into the bcftools directory: `cd bcftools-version`
* Run the configure script: `./configure`
* Compile and install bcftools: `make && make install`

Alternatively, you can also use package manager like apt-get, yum, Homebrew, etc to install bcftools,
* Ubuntu: `apt-get install bcftools`
* CentOS: `yum install bcftools`
* MacOS: `brew install bcftools`

You can also make use of conda-forge channel to install bcftools.
Note that you may need to use "sudo" before the commands if you are installing on a system-wide level and don't have the appropriate permissions.


To install vcftools, you will first need to have the appropriate dependencies installed, including a C compiler (such as GCC) and zlib library. Once those dependencies are met, you can download the source code for vcftools from the official website (https://vcftools.github.io/downloads.html) and then follow these steps:

* Unpack the vcftools tarball using the command: `tar -xzf vcftools-version.tar.gz`
* Change into the vcftools directory: `cd vcftools-version`
* Run the configure script: `./configure`
Compile and install vcftools: `make && make install`

Alternatively, you can also use package manager like apt-get, yum, Homebrew, etc to install vcftools, Example:

* Ubuntu: `apt-get install vcftools`
* CentOS: `yum install vcftools`
* MacOS: `brew install vcftools`

You can also make use of conda-forge channel to install vcftools.
Please note that you may need to use "sudo" before the commands if you are installing on a system-wide level and don't have the appropriate permissions.
Also, vcftools required a few more dependencies like ncurses and libbz2-dev (ubuntu) or bzip2-devel (CentOS) to be installed before the compilation.

#### Analysing dataset


```bash
sudo apt-get install tabix
gunzip -k 
java -Xmx8G -jar snpEff/SnpSift.jar annotate clinvar.vcf.gz gh3665.vcf > output.vcf
```

#### Install IPFS for file storing in blockchain

Here are the steps to install and start an IPFS daemon on a Linux machine using Bash (for unix based OS):

1. Install IPFS by running the following command: `curl https://dist.ipfs.io/go-ipfs/v0.7.0/go-ipfs_v0.7.0_linux-amd64.tar.gz --output go-ipfs.tar.gz`
2. Extract the files from the archive: `tar xvfz go-ipfs.tar.gz`
3. Move the binary to a directory in your PATH: `sudo mv go-ipfs/ipfs /usr/local/bin/`
4. Initialize IPFS and create a new repository: `ipfs init`

```sh
generating ED25519 keypair...done
peer identity: 12D3KooWPGVSyMaSfoH7NGopakPdrW6DxhjjrYAv6TXvyQki5ekE
initializing IPFS node at /home/codespace/.ipfs
to get started, enter:

        ipfs cat /ipfs/QmQPeNsJPyVWPFDVHb77w8G42Fvo15z4bG2X8D2GhfbSXc/readme
```
5. Start the IPFS daemon: `ipfs daemon`

```sh
Initializing daemon...
go-ipfs version: 0.7.0
Repo version: 10
System version: amd64/linux
Golang version: go1.14.4
Swarm listening on /ip4/127.0.0.1/tcp/4001
...
```

`Note: Use IPFS 0.4.23 ≤ … < 0.8.0`

Please note that the IPFS daemon will run in the background and continue running even after you close your terminal, you can stop the daemon by running `ipfs shutdown`.


## Team Members

* Vasileios Alevizos
* Ilias Georgousis
* Clark Xu
* Mattheos Tasios
* Sergei Ryakhovsky
* Nikitas Gerolimos
* Dimitra Malliarou
