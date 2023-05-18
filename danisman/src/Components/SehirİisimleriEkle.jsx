import { useEffect } from "react";

function SehirİsimleriEkle() {
    useEffect(()=>{
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
        addLabelText(label1, "Şanlıurfa");
        addLabelText(label2, "Gaziantep");
        addLabelText(label3, "Kilis");
        addLabelText(label4, "Osmaniye");
        addLabelText(label5, "Adana");
        addLabelText(label6, "Kahramanmaraş");
        addLabelText(label7, "Adıyaman");
        addLabelText(label8, "Malatya");
        addLabelText(label9, "Hatay");
        addLabelText(label10, "Diyarbakır");
        function addLabelText(bgPath, labelText)
        {
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
      },[])
  
  
  return (
    <div >
      
    </div>
  );
}

export default SehirİsimleriEkle;


