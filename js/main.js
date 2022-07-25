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
  const querySelector = node.querySelector;
  const label = node.label;
  const id = node.id;
  const name = node.name;
  const type = node.type;
  const placeholder = node.placeholder;

  const myform = new NewForm();
  myform.querySelector(querySelector);
  myform.inputSetAttribute(label, id, name, type, placeholder);
  myform.appendChild();
}

function createFields(nodes)
{
  for(let i=0; nodes.length>0; i++)
  {
    createField(nodes, i);
  }
}


document.addEventListener('DOMContentLoaded', ()=>{

  const nodes = [
    {
      "querySelector" : "#registro fieldset",
      "label" : "Nombres:",
      "id" : "nombres",
      "name" : "nombres",
      "type" : "text",
      "placeholder" : "Tus nombres..."
    },
    {
      "querySelector" : "#registro fieldset",
      "label" : "Apellidos:",
      "id" : "apellidos",
      "name" : "apellidos",
      "type" : "text",
      "placeholder" : "Tus apellidos..."
    },
    {
      "querySelector" : "#registro fieldset",
      "label" : "Correo electrónico:",
      "id" : "correo",
      "name" : "correo",
      "type" : "email",
      "placeholder" : "Tu correo electrónico..."
    },
    {
      "querySelector" : "#registro fieldset",
      "label" : "Contraseña:",
      "id" : "contrasena",
      "name" : "contrasena",
      "type" : "password",
      "placeholder" : "Contraseña..."
    },
    {
      "querySelector" : "#registro fieldset",
      "label" : "Confirmación contraseña:",
      "id" : "contrasenaP",
      "name" : "contrasenaP",
      "type" : "password",
      "placeholder" : "Confirmación contraseña..."
    },
  ];

  createFields(nodes);
});
