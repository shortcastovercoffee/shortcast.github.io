fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const fileDetailsDiv = document.getElementById('fileDetails');
        let fileDetailsList = '';

        // Parcourir les données et extraire les noms et les IDs
        data.forEach(item => {
            if (item.file.tooLarge == true) {
                fileDetailsList += `<p>${item.file.name} <br> Largeur : ${item.file.widthPx} px <br> Hauteur : ${item.file.heightPx} px <br> Poids : ${item.file.weightKo} ko <br> Emission : ${item.file.carbonEmissionKgCo2} kg de CO2<br> <span style="color:red">Fichier trop lourd</span><br>`;
            } else if (item.file.tooLarge == false) {
                fileDetailsList += `<p>${item.file.name} <br> Largeur : ${item.file.widthPx} px <br> Hauteur : ${item.file.heightPx} px <br> Poids : ${item.file.weightKo} ko <br> Emission : ${item.file.carbonEmissionKgCo2} kg de CO2<br> <span style="color:green">Fichier OK</span><br>`;
            }

        });

        // Ajouter les détails des fichiers au div
        fileDetailsDiv.innerHTML = fileDetailsList;
    })
    .catch(error => console.error('Une erreur s\'est produite lors de la récupération des données JSON :', error));
