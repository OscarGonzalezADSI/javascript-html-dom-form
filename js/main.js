class NewForm
{
  querySelector(querySelector)
  {
    this.registro = document.querySelector(querySelector);
    this.fieldset = document.createElement('fieldset');
    this.label = document.createElement('label');
    this.input = document.createElement('input');
  }
  
  inputSetAttribute(label, id, name, type, placeholder)
  {
    this.labelText = document.createTextNode(label);
    this.label.setAttribute('for', id);
    this.input.setAttribute('id', id);
    this.input.setAttribute('name', name);
    this.input.setAttribute('type', type);
    this.input.setAttribute('placeholder', placeholder);
    this.input.setAttribute('required', "");
  }
  
  appendChild()
  {
    this.label.appendChild(this.labelText);
    this.fieldset.appendChild(this.label);
    this.fieldset.appendChild(this.input);
    this.registro.appendChild(this.fieldset);
  }
  
}

function createField(nodes, index)
{
  const node = nodes[index];
  const label = node.label;
  const id = node.id;
  const name = node.name;
  const type = node.type;
  const placeholder = node.placeholder;

  const myform = new NewForm();
  myform.querySelector(node.myQuerySelector);
  myform.inputSetAttribute(label, id, name, type, placeholder);
  myform.appendChild();
}

function createFields(nodes)
{
  for(let i=0; nodes.length>i; i++)
  {
    createField(nodes, i);
  }
}























function condicionesInciales()
{
	document.getElementById("submit").disabled = true;
	soloMinusculas();
}

function soloMinusculas()
{
    const nombres = document.getElementById("nombres");
    const apellidos = document.getElementById("apellidos");
    const contrasena = document.getElementById("contrasena");
    const contrasenaP = document.getElementById("contrasenaP");

    nombres.addEventListener("keypress", write);
    apellidos.addEventListener("keypress", write);
    contrasena.addEventListener("keypress", write2);
    contrasenaP.addEventListener("keypress", write2);
}

function write()
{
	checkField(event);
}

function write2()
{
	setTimeout(function(){
		
	const response = false;	
	if(aceptacionPoliticas(response) == true && compareContrasena() == true)
	{
        document.getElementById("submit").disabled = false;
	}else{
        document.getElementById("submit").disabled = true;
	}
		
		
	}, 1000);
}

function checkField(evt)
{
    var charCode = evt.charCode;
    if(charCode != 0) {
        if(charCode < 97 || charCode > 122) {
            evt.preventDefault();
            alert("Por favor usa sólo letras minúsculas." + "\n" + "charCode: " + charCode + "\n");
        }
    }
}

function compareContrasena()
{
	const contrasena = document.getElementById("contrasena");
	const contrasenaP = document.getElementById("contrasenaP");
	if(contrasena.value == contrasenaP.value)
	{
		contrasena.setAttribute("style", "border:2px #00ff0055 solid;");
		contrasenaP.setAttribute("style", "border:2px #00ff0055 solid;");
		return true;
	}else{
		contrasena.setAttribute("style", "border:2px #ff000055 solid;");
		contrasenaP.setAttribute("style", "border:2px #ff000055 solid;");
		return false;
	}
}

function aceptacionPoliticas(response)
{
    if(response === false)
    {
		return true;
    }else{
		return false;
    }	
}

document.addEventListener('DOMContentLoaded', (eve)=>{

  const nodes = [
    {
      "myQuerySelector" : "#registro fieldset",
      "label" : "Nombres:",
      "id" : "nombres",
      "name" : "nombres",
      "type" : "text",
      "placeholder" : "Tus nombres..."
    },
    {
      "myQuerySelector" : "#registro fieldset",
      "label" : "Apellidos:",
      "id" : "apellidos",
      "name" : "apellidos",
      "type" : "text",
      "placeholder" : "Tus apellidos..."
    },
    {
      "myQuerySelector" : "#registro fieldset",
      "label" : "Correo electrónico:",
      "id" : "correo",
      "name" : "correo",
      "type" : "email",
      "placeholder" : "Tu correo electrónico..."
    },
    {
      "myQuerySelector" : "#registro fieldset",
      "label" : "Contraseña:",
      "id" : "contrasena",
      "name" : "contrasena",
      "type" : "password",
      "placeholder" : "Contraseña..."
    },
    {
      "myQuerySelector" : "#registro fieldset",
      "label" : "Confirmación contraseña:",
      "id" : "contrasenaP",
      "name" : "contrasenaP",
      "type" : "password",
      "placeholder" : "Confirmación contraseña..."
    },
  ];

createFields(nodes);

condicionesInciales();

const aceptaPoliticas = document.getElementById("aceptaPoliticas");

const response = false;

aceptaPoliticas.addEventListener("click",()=>{
	if(aceptacionPoliticas(response) == true && compareContrasena() == true)
	{
        document.getElementById("submit").disabled = false;
	}else{
        document.getElementById("submit").disabled = true;
	}
});
});
