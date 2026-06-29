# **learnnest-platform**



## **LearnNest LMS**



### **Overview**



A cloud-based Learning Management System (LMS) developed using DevSecOps practices. LearnNest enables students to register, log in, access their learning dashboard, browse courses, watch educational videos, manage assignments, and track learning progress. The application is deployed on AWS EC2 with an Nginx web server and uses GitHub for version control and CI/CD.



### Features



* User Registration
* User Login with JWT Authentication
* Student Dashboard
* Student Profile
* Course Management
* Assignment Management
* Video Learning Module
* Progress Tracking
* Responsive React Frontend
* RESTful Backend APIs
* MySQL Database Integration
* Dockerized Deployment
* CI/CD using GitHub Actions
* AWS EC2 Deployment
* Nginx Web Server







### Tech Stack



#### Frontend



* React.js
* Vite
* React Router
* Axios



#### Backend



* Node.js
* Express.js



#### Database



\* MySQL



#### DevOps



* Docker
* Docker Hub
* GitHub Actions
* AWS EC2
* Ngnix



### 

### APIs



\* POST /api/auth/login

\* POST /api/courses/:id/enroll

\* GET /api/my-courses

\* POST /api/courses/:id/assignments

\* GET /api/courses/:id/assignments

\* POST /api/assignments/:id/submit

\* GET /api/submissions

\* POST /api/submissions/:id/grade

\* GET /api/my-submissions



### Deployment

**Frontend**

http://3.109.60.186

**Backend API**

http://3.109.60.186:3000

### Status

* Backend: Complete
* Database: Complete
* Dockerization: Complete
* AWS Deployment: Complete
* CI/CD: Complete
