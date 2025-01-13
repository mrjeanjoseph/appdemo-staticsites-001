# Azure Functions Project

This project is an Azure Functions application that includes an HTTP triggered function.

## Project Structure

```
azure-functions-project
├── HttpTrigger
│   ├── index.js          # Contains the HTTP triggered function
│   └── function.json     # Configuration for the HTTP trigger
├── host.json             # Global configuration options for all functions
├── local.settings.json    # Local development settings
├── proxies.json          # Routing configuration for incoming requests
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd azure-functions-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the function locally**:
   ```
   func start
   ```