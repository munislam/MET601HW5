// Declaration to handle API Request
const apiURL = "info.json";

// Declaration to target Dark theme switch
const toggleSwitch = document.querySelector('input[type="checkbox"]');

//Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function processToFrontEnd (degreesList) {
    let div_tag = document.getElementById("text-box");
    div_tag.innerHTML = '';
    // console.log(degreesList);
    for (let i=0; i<degreesList.length; i++) {
        // Declaration to target tags with ID
        let p_tag_major = document.createElement("p");
        let p_tag_type = document.createElement("p");
        let p_tag_year_conferred = document.createElement("p");
        let h2_tag = document.createElement("h2");


        let school = degreesList[i].School;
        let text = document.createTextNode(school);
        h2_tag.appendChild(text);
        div_tag.appendChild(h2_tag);

        let major = degreesList[i].Major;
        text = document.createTextNode("Major: " + major);
        p_tag_major.appendChild(text);
        div_tag.appendChild(p_tag_major);

        let type = degreesList[i].Type;
        text = document.createTextNode("Degree Type: " + type);
        p_tag_type.appendChild(text);
        div_tag.appendChild(p_tag_type);

        let year_conferred = degreesList[i].Year_conferred;
        text = document.createTextNode("Year conferred: " + year_conferred);
        p_tag_year_conferred.appendChild(text);
        div_tag.appendChild(p_tag_year_conferred);

        // Scroll to appropriate section
        document.querySelector("#main").scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function getDegrees(){
    fetch (apiURL).then((response) => {
        return response.json();
    }).then(data => {
        // Pass the response to a processing function
        processToFrontEnd(data.Degree);
    }).catch((error) => {
        console.log(error);
    })
}

//Event listener
toggleSwitch.addEventListener('change', switchTheme);