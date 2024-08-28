# Vendor Management System

## Overview

The Vendor Management System (VMS) is built with Node.js and the NestJS framework. It allows users to manage vendor profiles, track purchase orders, and evaluate vendor performance metrics.

## Features

- **Vendor Profile Management**
  - Create, read, update, and delete vendor profiles.
- **Purchase Order Tracking**
  - Manage purchase orders and filter them by vendor.
- **Vendor Performance Evaluation**
  - Calculate and retrieve performance metrics including on-time delivery rate, quality rating, response time, and fulfillment rate.

## Prerequisites

- Node.js (v18 or later)
- PostgreSQL (for database)
- Git

## Installation


```bash
git clone https://github.com/shivani-2705/vendor-management-system.git
cd vendor-management-system


###2. Install Dependencies
   npm install

###3 Running the Application
  npm run start:dev



# API Documentation

## Base URL
http://localhost:3000


## Vendor Profile Management

- **POST /vendors**  
  Create a new vendor profile.

- **GET /vendors**  
  Retrieve a list of all vendors.

- **GET /vendors/:vendorId**  
  Retrieve details of a specific vendor.

- **PUT /vendors/:vendorId**  
  Update details of a specific vendor.

- **DELETE /vendors/:vendorId**  
  Delete a specific vendor.

## Purchase Order Tracking

- **POST /purchase-orders**  
  Create a new purchase order.

- **GET /purchase-orders**  
  Retrieve a list of all purchase orders (optionally filtered by vendor).

- **GET /purchase-orders/:poId**  
  Retrieve details of a specific purchase order.

- **PUT /purchase-orders/:poId**  
  Update a specific purchase order.

- **DELETE /purchase-orders/:poId**  
  Delete a specific purchase order.

## Vendor Performance Evaluation

- **GET /vendors/:vendorId/performance**  
  Retrieve performance metrics for a specific vendor.

- **POST /purchase-orders/:poId/acknowledge**  
  Acknowledge a specific purchase order and update acknowledgment date.



