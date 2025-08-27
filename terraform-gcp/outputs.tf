output "cluster_name" {
  description = "The name of the GKE cluster"
  value       = google_container_cluster.ecommerce_cluster.name
}

output "cluster_region" {
  description = "The region of the GKE cluster"
  value       = google_container_cluster.ecommerce_cluster.location
}

output "cluster_endpoint" {
  description = "The endpoint of the GKE cluster"
  value       = google_container_cluster.ecommerce_cluster.endpoint
}

output "kubeconfig" {
  description = "Kubeconfig for accessing the cluster"
  value       = google_container_cluster.ecommerce_cluster.master_auth.0.cluster_ca_certificate
  sensitive   = true
}
