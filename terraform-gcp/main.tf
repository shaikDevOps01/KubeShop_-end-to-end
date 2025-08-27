provider "google" {
  project = "devops-9848"
  region  = "us-central1"
}

resource "google_container_cluster" "ecommerce_cluster" {
  name     = "ecommerce-dev-cluster"
  location = "us-central1"
  
  remove_default_node_pool = true
  initial_node_count       = 1
}

resource "google_container_node_pool" "primary_nodes" {
  name       = "ecommerce-node-pool"
  location   = "us-central1"
  cluster    = google_container_cluster.ecommerce_cluster.name
  node_count = 2

  node_config {
    machine_type = "e2-medium"
    disk_size_gb = 20
    
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }
}
