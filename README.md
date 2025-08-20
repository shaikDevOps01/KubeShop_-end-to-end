
# 🛒 KubeShop — Cloud-Native E-Commerce on Kubernetes

KubeShop is a **microservices-based e-commerce platform** built and deployed on **Kubernetes**.  
It is designed to demonstrate **end-to-end DevOps practices** including CI/CD, containerization, orchestration, monitoring, and cloud deployment.  

## 🚀 Tech Stack

- **Frontend** → React (served with NGINX)  
- **Backend Microservices**:
  - Product Service → FastAPI + MongoDB  
  - Cart Service → Node.js + Redis  
  - Order Service → Spring Boot + PostgreSQL  
  - Payment Service → Node.js + Stripe API  
  - Auth Service → JWT Authentication  
- **API Gateway** → NGINX Ingress Controller  
- **Message Queue** → RabbitMQ  
- **Infrastructure** → Kubernetes (GKE / EKS / AKS / Minikube / Kind)  
- **CI/CD** → GitHub Actions + Docker Hub / Artifact Registry  
- **Monitoring** → Prometheus + Grafana  
- **Logging** → Loki + Grafana  

## ⚙️ Architecture

\[React Frontend] -> \[NGINX Ingress] -> \[Microservices APIs] -> \[Databases / MQ]

* Product Service (FastAPI + MongoDB)
* Cart Service (Node.js + Redis)
* Order Service (Spring Boot + PostgreSQL)
* Payment Service (Node.js + Stripe)
* Auth Service (JWT)

Each service is containerized with Docker and deployed on Kubernetes.  
Ingress exposes frontend + APIs under a single domain (`kubeshop.example.com`).  


## 📂 Project Structure

kubeshop/
├── frontend/         # React + NGINX
├── product-service/  # FastAPI + MongoDB
├── cart-service/     # Node.js + Redis
├── order-service/    # Spring Boot + PostgreSQL
├── payment-service/  # Node.js + Stripe
├── auth-service/     # JWT Authentication
├── k8s-manifests/    # Kubernetes YAML files
└── ci-cd/            # GitHub Actions workflows

## 🛠️ Setup & Run Locally

1. Clone the repo: bash
   git clone https://github.com/<your-username>/kubeshop.git
   cd kubeshop

2. Run with Docker Compose (local dev):bash
   docker-compose up --build

3. Run on Kubernetes (Minikube example):bash
   kubectl apply -f k8s-manifests/
   minikube service frontend-service
   
## 🌐 CI/CD Flow

* Code pushed → GitHub Actions run tests
* Build & push Docker images to registry
* Deploy new version to Kubernetes cluster


## 📊 Monitoring & Logging

* Prometheus + Grafana for metrics
* Loki + Grafana for centralized logging

## 🎯 Goal of Project

This project is built to **demonstrate complete DevOps lifecycle**:

* Microservices development
* Dockerization
* CI/CD automation
* Kubernetes orchestration
* Monitoring & logging
* Cloud-native best practices


## 📌 Next Steps (Roadmap)

* ✅ Add Helm charts for Kubernetes deployment
* ✅ Configure TLS with Cert-Manager & Let's Encrypt
* 🔲 Implement service-to-service security (mTLS, Istio/Linkerd)
* 🔲 Add horizontal pod autoscaling (HPA)
* 🔲 Deploy to multi-cloud


## 👨‍💻 Author

**Shaik Dasthagiri** — DevOps Engineer (India)

