function submit() {
        $("#output").slideDown(300);
        $("#outputTable").fadeIn(600);
        let pokemon = $("#pokemonNameInput").val();
        
        //let url = "https://pokeapi.co/api/v2/pokemon/";
        //url = url + pokemon + "/";
        let url = "https://pokeapi.co/api/v2/pokemon/";
        
        url = url + pokemon.toLowerCase() + "/";
        
        
    $.get(url, function(data){
        //document.getElementById("raw").innerHTML = JSON.stringify(data);
         displayResults(data);
    });
}


function displayResults(data) {
    

    let pokeName = data.forms[0].name;
    let pokeCapped = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    $("#resultPokemonName").html(pokeCapped);
    $("#resultPokemonName2").html(pokeCapped);
    $("#pokemonImg").attr("src", data.sprites.front_default);
    
    if(data.sprites.back_default != null){
        $("#pokemonImg2").attr("src", data.sprites.back_default);
    }else if(data.sprites.front_shiny != null){
        $("#pokemonImg2").attr("src", data.sprites.front_shiny);
    }else if(data.sprites.back_shiny != null){
        $("#pokemonImg2").attr("src", data.sprites.back_shiny);
    }else if(data.sprites.back_shiny_female != null){
        $("#pokemonImg2").attr("src", data.sprites.back_shiny_female);
    }else{
        $("#pokemonImg2").attr("src", "ash.png");
    }
    

    
    let gamesAppearedIn = "";
    let abilities = "";
    let type = data.types[0].type.name;
    let typeCapped = type.charAt(0).toUpperCase() + type.slice(1);
    let weight = data.weight + " lbs";
    let height = data.height + "\'";
    
    
    for(let i = 0; i < data.abilities.length && i < 5; i++){
            let currentAbility = data.abilities[i].ability.name;
            let cappedCurrent = currentAbility.charAt(0).toUpperCase() + currentAbility.slice(1);
            abilities += "&emsp;" + (i+1) + "." + " " + cappedCurrent + "<br>";
            
    }
    
    if(data.abilities.length === 0){
        abilities = "Unfortunately " + pokeCapped + " seems to be abilityless :(";
    }
    
    

    $("#pokemonType").html(typeCapped);
    $("#pokemonWeight").html(weight);
    $("#pokemonHeight").html(height);
    $("#pokemonAbilities").html(abilities);
    
    if(type == "grass"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#00e668");
    }else if(type === "steel"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#9e9e9e");
    }else if(type === "bug"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#00db07");
    }else if(type === "dark"){
        $("#pokemonType").css("background-color","#232423");
        $("#pokemonType").css("color","white");
    }else if(type === "dragon"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#00ebf7");
    }else if(type === "electric"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#ffff45");
    }else if(type === "fairy"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#ff33b8");
    }else if(type === "fighting"){
        $("#pokemonType").css("background-color","#bf5c26");
        $("#pokemonType").css("color","white");
    }else if(type === "fire"){
        $("#pokemonType").css("color","white");
        $("#pokemonType").css("background-color","#ff1616");
    }else if(type === "flying"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#3ba3ff");
    }else if(type === "ghost"){
        $("#pokemonType").css("background-color","#880db5");
        $("#pokemonType").css("color","white");
    }else if(type === "ground"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#a37956");
    }else if(type === "ice"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#a1efff");
    }else if(type === "normal"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#a28eab");
    }else if(type === "poison"){
        $("#pokemonType").css("background-color","#972ac9");
        $("#pokemonType").css("color","white");
    }else if(type === "psychic"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#e846db");
    }else if(type === "rock"){
        $("#pokemonType").css("background-color","#99613c");
        $("#pokemonType").css("color","white");
    }else if(type === "water"){
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","#73ecff");
    }else{
        $("#pokemonType").css("color","black");
        $("#pokemonType").css("background-color","0490c7");
    }
    
    
    
}


