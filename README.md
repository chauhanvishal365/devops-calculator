🧮 DevOps Calculator – Node.js Web App

A simple calculator web application built with Node.js + Express, created as the base application for a complete DevOps CI/CD project using Docker, Jenkins, Terraform, Kubernetes, GitHub Actions, and AWS.

This project is intentionally minimal so it can be easily containerized, deployed, automated, and extended during DevOps learning.

🚀 Features

Basic calculator operations

Simple Node.js + Express backend

REST-style route for performing operations

Lightweight codebase — perfect for DevOps pipelines

Ready for Docker, Kubernetes, Terraform, CI/CD, and AWS deployment

📂 Project Structure
devops-calculator/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

📦 Tech Stack

Node.js

Express.js

JavaScript

DevOps tools (as part of final project):

Docker

Jenkins

AWS EC2 / ECR / EKS

Terraform

GitHub

Kubernetes

Ansible

🛠️ Setup Instructions (Local Development)
1️⃣ Clone the repository
git clone https://github.com/chauhanvishal365/devops-calculator.git
cd devops-calculator

2️⃣ Install dependencies
npm install

3️⃣ Start the server
npm start

4️⃣ Access the application

Open your browser:

http://localhost:3000


Or use API (example):

http://localhost:3000/add?a=10&b=20

📡 Available API Routes
Operation	Example Route
Add	/add?a=10&b=5
Subtract	/sub?a=10&b=5
Multiply	/mul?a=10&b=5
Divide	/div?a=10&b=5
🐳 Docker Support

Build Docker image:

docker build -t devops-calculator .


Run container:

docker run -p 3000:3000 devops-calculator

☸️ Kubernetes Support

After Day 6/7 of your roadmap, you will add:

deployment.yaml

service.yaml

Example command (later):

kubectl apply -f deployment.yaml

🔧 Future DevOps Integrations (Roadmap)

This project will be used for building a full DevOps pipeline:

Day 2 → Dockerize

Day 3 → Deploy on AWS EC2

Day 4 → Terraform IaC

Day 5 → Jenkins CI/CD

Day 6 → Kubernetes local cluster

Day 7 → Deploy to AWS EKS

Day 8 → Ansible automation

Day 9 → Full automated pipeline

Day 10 → Documentation + Portfolio

🤝 Contributing

Create a feature branch:

git checkout -b feature/my-change


Commit your changes

Push and open a Pull Request

📜 License

MIT License — free to use & modify.

🙋‍♂️ Author

Vishal Kumar Chauhan
GitHub: https://github.com/chauhanvishal365