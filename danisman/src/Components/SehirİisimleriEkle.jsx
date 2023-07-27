import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SehirİsimleriEkle() {
  const navigate = useNavigate();

  useEffect(() => {
    let label1 = document.querySelector("#sanliurfa");
    let label2 = document.querySelector("#gaziantep");
    let label3 = document.querySelector("#kilis");
    let label4 = document.querySelector("#osmaniye");
    let label5 = document.querySelector("#adana");
    let label6 = document.querySelector("#kahramanmaras");
    let label7 = document.querySelector("#adiyaman");
    let label8 = document.querySelector("#malatya");
    let label9 = document.querySelector("#hatay");
    let label10 = document.querySelector("#diyarbakir");
    addLabelText(label1, "ŞANLIURFA");
    document.getElementById("sanliurfa").addEventListener("click", function() {
        navigate("/sehirler/sanliurfa");
    });
    addLabelText(label2, "GAZİANTEP");
    document.getElementById("gaziantep").addEventListener("click", function() {
      navigate("/sehirler/gaziantep");
  });
    addLabelText(label3, "KİLİS");
    document.getElementById("kilis").addEventListener("click", function() {
      navigate("/sehirler/kilis");
  });
    addLabelText(label4, "OSMANİYE");
    document.getElementById("osmaniye").addEventListener("click", function() {
      navigate("/sehirler/osmaniye");
  });
    addLabelText(label5, "ADANA");
    document.getElementById("adana").addEventListener("click", function() {
      navigate("/sehirler/adana");
  });
    addLabelText(label6, "KAHRAMANMARAŞ");
    document.getElementById("kahramanmaras").addEventListener("click", function() {
      navigate("/sehirler/kahramanmaras");
  });
    addLabelText(label7, "ADIYAMAN");
    document.getElementById("adiyaman").addEventListener("click", function() {
      navigate("/sehirler/adiyaman");
  });
    addLabelText(label8, "MALATYA");
    document.getElementById("malatya").addEventListener("click", function() {
      navigate("/sehirler/malatya");
  });
    addLabelText(label9, "HATAY");
    document.getElementById("hatay").addEventListener("click", function() {
      navigate("/sehirler/hatay");
  });
    addLabelText(label10, "DİYARBAKIR");
    document.getElementById("diyarbakir").addEventListener("click", function() {
      navigate("/sehirler/diyarbakir");
  });
    function addLabelText(bgPath, labelText) {
      let bbox = bgPath.getBBox();
      let x = bbox.x + bbox.width / 2.2;
      let y = bbox.y + bbox.height / 1.7;
      let textElem = document.createElementNS(bgPath.namespaceURI, "text");
      textElem.setAttribute("x", x);
      textElem.setAttribute("y", y);
      textElem.setAttribute("text-anchor", "middle");
      textElem.classList.add("label-text");
      textElem.textContent = labelText;
      bgPath.after(textElem);
    }
  }, []);

  return <div></div>;
}

export default SehirİsimleriEkle;
