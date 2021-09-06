var click = document.getElementById("click")
var blocklyArea = document.getElementById('blocklyArea');
var workspace = Blockly.inject('blocklyDiv',
      {
        zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true},
          grid:
         {spacing: 30,
          length: 3,
          colour: '#ccc',
          snap: true},
        toolbox: document.getElementById('toolbox')
        
});







//code-gen & runing
var code = Blockly.JavaScript.workspaceToCode(workspace);
function myUpdateFunction(event) {
  code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('text').value = code;
}
workspace.addChangeListener(myUpdateFunction);

$("#text").hide()
$("#play").click(function() {
  click.play()
  try {
  eval(code);
 } catch (error) {
  throw new Error("Something went badly wrong!");
  alert(error);
 }
 

})

$("#code").click(function() {
  click.play()
  $("#text").toggle()
})

$("#save").click(function() {
  click.play()
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xml_text = Blockly.Xml.domToText(xml);
  var name = window.prompt("name");
  store.setItem(name,xml_text);
})
$("#load").click(function() {
  click.play()
  var name = window.prompt("name");
  var xml = Blockly.Xml.textToDom(store.getItem(name));
  Blockly.Xml.domToWorkspace(xml, workspace);
})
