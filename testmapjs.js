document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('mouseover', () => {
        const infoId = point.getAttribute('data-info');
        const infoBox = document.getElementById('info-box');
        const infoImg = document.getElementById('info-img');
        const infoText = document.getElementById('info-text');

        // Define the information for each point
        const infoData = {
            'info1': {
                text: 'Wellington, the capital city of New Zealand, is known for its vibrant arts scene and stunning harbor views.'
            },
            'info2': {
                text: 'Auckland is New Zealand\'s largest city, famous for its iconic Sky Tower and diverse culture.'
            },
            'info3': {
                text: 'Christchurch, known as the "Garden City," features beautiful parks and is recovering and rebuilding from the 2011 earthquake.'
            },
            'info4': {
                img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTK_OI7HoPZ3gn-YpkYA5pDH9rTJPypk6_fygsZV8dn1WaR704oMqwhs39VrCLzyhQVW_NKm4jNttMhUBGnCKn5nmc-aPaXAvRRbEflWg',
                text: 'Dunedin is known for its Scottish heritage and is a gateway to the Otago Peninsula and its wildlife.'
            },
            'info5': {
                text: 'Hamilton is known for its beautiful gardens and is located near the Hobbiton movie set.'
            }
            // Add more points as needed
        };

        infoImg.src = infoData[infoId].img;
        infoText.textContent = infoData[infoId].text;

        // Set position of the info box
        const rect = point.getBoundingClientRect();
        infoBox.style.top = `${rect.top + window.scrollY + 30}px`;
        infoBox.style.left = `${rect.left + window.scrollX}px`;
        infoBox.style.display = 'block';
    });

    point.addEventListener('mouseout', () => {
        const infoBox = document.getElementById('info-box');
        infoBox.style.display = 'none';
    });
});
