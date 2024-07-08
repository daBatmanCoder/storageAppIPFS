# IPFS Storage Web Application

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Description

This web application provides a simple interface for interacting with the InterPlanetary File System (IPFS). Users can add data to IPFS and retrieve data using Content Identifiers (CIDs). The application offers a user-friendly way to explore and utilize decentralized storage.

## Features

### Add Data
- Input text directly or upload a file
- Add content to IPFS
- Display the resulting CID after successful addition

### Get Data
- Retrieve data from IPFS using a CID
- Display fetched content or error messages

### User Interface
- Toggle between "Add Data" and "Get Data" modes
- Responsive design for various screen sizes

## Installation

1. Clone the repository:
```bash
git clone https://github.com/daBatmanCoder/storageAppIPFS
```

2. Navigate to the project directory:
```bash
cd storageAppIPFS
```

3. Open `index.html` in a web browser.

Note: For security reasons, some browsers may restrict JavaScript from running when opening HTML files directly. In this case, you'll need to set up a local web server.

## Usage

1. **Adding Data**:
- Select the "Add Data" mode.
- Enter text in the textarea or click "Upload File Instead" to choose a file.
- Click "Add to IPFS" to store the data.
- The resulting CID will be displayed below.

2. **Retrieving Data**:
- Switch to the "Get Data" mode.
- Enter a valid CID in the input field.
- Click "Get Data" to retrieve and display the content.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [IPFS](https://ipfs.io/) (InterPlanetary File System)
- [js-ipfs](https://github.com/ipfs/js-ipfs) (IPFS implementation in JavaScript)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---
