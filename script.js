document.addEventListener('DOMContentLoaded', async function() {
    const node = await Ipfs.create();
    
    const addModeBtn = document.getElementById('addModeBtn');
    const getModeBtn = document.getElementById('getModeBtn');
    const addDataSection = document.getElementById('addDataSection');
    const getDataSection = document.getElementById('getDataSection');
    
    addModeBtn.addEventListener('click', () => switchMode('add'));
    getModeBtn.addEventListener('click', () => switchMode('get'));
    
    function switchMode(mode) {
        if (mode === 'add') {
            addModeBtn.classList.add('active');
            getModeBtn.classList.remove('active');
            addDataSection.style.display = 'block';
            getDataSection.style.display = 'none';
        } else {
            addModeBtn.classList.remove('active');
            getModeBtn.classList.add('active');
            addDataSection.style.display = 'none';
            getDataSection.style.display = 'block';
        }
    }

    document.getElementById('uploadFileBtn').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });

    document.getElementById('fileInput').addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            document.getElementById('textInput').value = `File selected: ${event.target.files[0].name}`;
        }
    });

    document.getElementById('addButton').addEventListener('click', async () => {
        const textInput = document.getElementById('textInput');
        const fileInput = document.getElementById('fileInput');
        let content;

        if (fileInput.files.length > 0) {
            content = fileInput.files[0];
        } else if (textInput.value) {
            content = textInput.value;
        } else {
            alert('Please enter text or select a file.');
            return;
        }

        try {
            const result = await node.add(content);
            document.getElementById('addResult').textContent = `Content added. CID: ${result.path}`;
        } catch (error) {
            console.error('Error adding content to IPFS:', error);
            document.getElementById('addResult').textContent = 'Error adding content to IPFS. Check console for details.';
        }
    });

    document.getElementById('getDataButton').addEventListener('click', async () => {
        const hashInput = document.getElementById('hashInput');
        const cid = hashInput.value;
        if (cid) {
            try {
                const stream = node.cat(cid);
                let data = '';
                for await (const chunk of stream) {
                    data += new TextDecoder().decode(chunk);
                }
                document.getElementById('getResult').textContent = data;
            } catch (error) {
                console.error('Error retrieving data from IPFS:', error);
                document.getElementById('getResult').textContent = 'Error: Content not found or invalid CID.';
            }
        } else {
            alert('Please enter a CID.');
        }
    });
});