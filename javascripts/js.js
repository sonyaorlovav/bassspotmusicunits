// билет
document.addEventListener("DOMContentLoaded", function() {
let shiftX, shiftY;
const ticket = document.querySelector(".ticket"); 
if (!ticket) return; //существует ли элемент
const moveAt = (e) => {
ticket.style.cursor = 'grabbing';
ticket.style.left = e.clientX - shiftX + 'px';
ticket.style.top = e.clientY - shiftY + 'px';
};
ticket.addEventListener('mousedown', (e) => {
e.preventDefault(); 
const rect = ticket.getBoundingClientRect();
shiftX = e.clientX - rect.left;
shiftY = e.clientY - rect.top;
moveAt(e);
const onMouseMove = (e) => {
    moveAt(e);
};
const onMouseUp = () => {
ticket.style.cursor = 'grab';
document.removeEventListener('mousemove', onMouseMove);
document.removeEventListener('mouseup', onMouseUp);
};
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});
ticket.ondragstart = () => false;
});

// джаз диск
document.addEventListener("DOMContentLoaded", function () {
    const records = document.querySelectorAll(".jazz, .pop, .calendar");

records.forEach(record => {
        let isRotating = false;
        let startAngle = 0;

record.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isRotating = true;

            //центр пластинки
            const rect = record.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            //угол относительно центра
            const startX = e.clientX - centerX;
            const startY = e.clientY - centerY;
            startAngle = Math.atan2(startY, startX) * (180 / Math.PI) - getRotationAngle(record);

            const onMouseMove = (e) => {
                if (!isRotating) return;

                const currentX = e.clientX - centerX;
                const currentY = e.clientY - centerY;
                const currentAngle = Math.atan2(currentY, currentX) * (180 / Math.PI);

            //новый угол поворота
                record.style.transform = `rotate(${currentAngle - startAngle}deg)`;
            };

            const onMouseUp = () => {
                isRotating = false;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });

       
        record.ondragstart = () => false;
    });

    function getRotationAngle(element) {
        const style = window.getComputedStyle(element);
        const transform = style.transform;

        if (transform === "none") return 0;

        const values = transform.match(/matrix\(([^)]+)\)/);
        if (!values) return 0;

        const matrix = values[1].split(", ");
        const a = parseFloat(matrix[0]);
        const b = parseFloat(matrix[1]);

        return Math.round(Math.atan2(b, a) * (180 / Math.PI));
    }
});


// звуки

document.addEventListener("DOMContentLoaded", function () {
    const guitar = document.querySelector(".guitar");
    const sound = document.getElementById("guitarSound");
    
    guitar.addEventListener("click", () => {
        sound.currentTime = 0; 
        sound.play();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const guitar = document.querySelector(".jazz");
    const sound = document.getElementById("jazzSound");
    
    guitar.addEventListener("click", () => {
        sound.currentTime = 0; 
        sound.play();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const guitar = document.querySelector(".pop");
    const sound = document.getElementById("popSound");
    
    guitar.addEventListener("click", () => {
        sound.currentTime = 0; 
        sound.play();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const guitar = document.querySelector(".cassete");
    const sound = document.getElementById("casSound");
    
    guitar.addEventListener("click", () => {
        sound.currentTime = 0; 
        sound.play();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const guitar = document.querySelector(".phone");
    const sound = document.getElementById("phoneSound");
    
    guitar.addEventListener("click", () => {
        sound.currentTime = 0; 
        sound.play();
    });
});



// гитара

document.addEventListener("DOMContentLoaded", function () {
const guitar = document.querySelector(".guitar");

function shakeGuitar() {
    guitar.style.transition = "transform 0.2s ease-in-out"; 
    guitar.style.transform = "rotate(-30deg)"; 

    setTimeout(() => {
        guitar.style.transform = "rotate(30deg)"; 
    }, 100);

    setTimeout(() => {
        guitar.style.transform = "rotate(0deg)"; 
    }, 200);
}
guitar.addEventListener("click", shakeGuitar);

});


document.addEventListener("DOMContentLoaded", function () {
const cassete = document.querySelector(".cassete");

function pulseCassete() {
    // изменения размера
    cassete.style.transition = "transform 0.4s ease-in-out";
    
    cassete.style.transform = "scale(1.1)"; 

    //возвращаем в исходное состояние
    setTimeout(() => {
        cassete.style.transform = "scale(1)"; // нормальный размер
    }, 400);
}
cassete.addEventListener("click", pulseCassete);

});

document.addEventListener("mousemove", function () {
    const phone = document.querySelector(".phone");
    function pulsePhone() {
      
        phone.style.transition = "transform 0.4s ease-in-out";
        phone.style.transform = "scale(1.3)"; 

        setTimeout(() => {
            phone.style.transform = "scale(1)"; 
        }, 400);
    }
    phone.addEventListener("click", pulsePhone);
});







