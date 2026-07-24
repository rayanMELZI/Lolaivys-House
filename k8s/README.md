# Deploying Lolaivy's House

The app is a Next.js 14 (standalone) container. It runs on the k3s cluster
behind Traefik, with **Cloudflare Tunnel** providing public DNS + TLS for
`*.rayanemelzi.dev`. Traefik routes plain HTTP (:80) by hostname.

Public URL: **https://lolaivyshouse.rayanemelzi.dev**

## Manifests

| File             | Purpose                                             |
| ---------------- | --------------------------------------------------- |
| `namespace.yaml` | `lolaivys-house` namespace                          |
| `deployment.yaml`| App Deployment (pulls `ghcr.io/rayanmelzi/lolaivys-house`) |
| `service.yaml`   | ClusterIP `:80 -> :3000`                            |
| `ingress.yaml`   | Traefik ingress for `lolaivyshouse.rayanemelzi.dev` |

## Apply

```bash
kubectl apply -k k8s/
# or individually:
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

## One-time external prerequisites

These need credentials/dashboards that live outside the repo:

### 1. Publish the image (CI)

Pushing to `main` or `cleanNextVersion` runs
`.github/workflows/docker-publish.yml`, which builds and pushes
`ghcr.io/rayanmelzi/lolaivys-house:latest` to GHCR using the automatic
`GITHUB_TOKEN`. No secrets required.

### 2. Let the cluster pull from GHCR

GHCR packages are **private by default**. Either:

- Make the package public (GitHub → Packages → package → Settings → Change
  visibility → Public), then the `imagePullSecrets` block in `deployment.yaml`
  is optional; **or**
- Create a pull secret with a PAT that has `read:packages`:

  ```bash
  kubectl create secret docker-registry ghcr-pull \
    --docker-server=ghcr.io \
    --docker-username=rayanMELZI \
    --docker-password=<PAT_read_packages> \
    -n lolaivys-house
  ```

### 3. Route the hostname through the Cloudflare Tunnel

The tunnel is token-managed (configured in the Cloudflare Zero Trust
dashboard, not in-cluster). Unless a wildcard `*.rayanemelzi.dev` route already
exists, add a **Public Hostname**:

- Subdomain: `lolaivyshouse`  Domain: `rayanemelzi.dev`
- Service: `HTTP` → the same Traefik service the other apps use
  (e.g. `http://traefik.kube-system:80`).

## Roll out a new image

CI publishes a fresh `:latest` on every push. To pull it:

```bash
kubectl rollout restart deployment/lolaivys-house -n lolaivys-house
kubectl rollout status  deployment/lolaivys-house -n lolaivys-house
```
