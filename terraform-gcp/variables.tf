variable "gcp_project" {
  description = "The GCP Project ID"
  type        = string
}

variable "gcp_region" {
  description = "The GCP region"
  type        = string
  default     = "us-central1"
}

variable "cluster_name" {
  description = "The name of the GKE cluster"
  type        = string
  default     = "ecommerce-dev-cluster"
}

variable "node_count" {
  description = "Number of worker nodes"
  type        = number
  default     = 2
}

variable "machine_type" {
  description = "Machine type for worker nodes"
  type        = string
  default     = "e2-medium"
}
