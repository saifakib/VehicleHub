# 🏠 Vehicle Hub
---

## API

### Manufacturers

- **Endpoint:** `/api/v1/manufacturers`
- **Method:** `GET`
- **Description:**  Manufact Manufacturer API.
- **Authentication:** Not required.

### Manufacturers Models

- **Endpoint:** `/api/v1/manufacturers/:id`
- **Method:** `GET`
- **Description:** Models under the manufacturer
- **Authentication:** Not required.

### Model

- **Endpoint:** `/api/v1/models/:id`
- **Method:** `GET`
- **Description:** Years under the model.
- **Authentication:** Not required.

---

## 🛠️ Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Docker](https://www.docker.com/) (for Docker setup)

### Local Setup

**Clone the repository** and navigate into the project directory:
   ```bash
   git clone https://github.com/saifakib/VehicleHub.git
   cd VehicleHub
   ```
**Install dependencies**
```bash
   npm install
```
**Run dependency database docker compose**
```bash
   docker compose up -d
```
Create a .env file in the root directory using .env.example as a template. Configure necessary environment variables.
**Run this application**
   ```bash
   npm start
   ```

