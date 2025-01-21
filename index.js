let aimDay = new Date(2025, 0, 1);
import { mySpark } from './script.js';
var isSpring = false;
var isClick = false;
var runonce = 1;

        function setSpringFes() {
            aimDay = new Date(2025, 0, 22, 3, 45, 0);
            const title = document.querySelector("h1");
            title.textContent = "春节倒计时";
        }
        function handleClick(event){
            isClick = true;
        }

        setInterval(() => {
            // if(runonce == 1){
            //     increaseFont();
            // }
            if(isSpring == true){
                document.body.style.fontSize = "3vw";
                Fire();
                //document.addEventListener('click',handleClick);
                mySpark();
                //LoadScript();
            }
            else{

                HiddenFire();
                const now = new Date();
                const dt = Math.ceil((aimDay - now) / 1000);
                console.log(isSpring);
                if(dt == 0){
                    isSpring = true;
                }
                if (dt <= 0) { setSpringFes(); return; }
                flipAllCards(dt);
            }
        }, 500);



        const days_tens = document.querySelector("[data-days-tens]");
        const days_ones = document.querySelector("[data-days-ones]");
        const hours_tens = document.querySelector("[data-hours-tens]");
        const hours_ones = document.querySelector("[data-hours-ones]");
        const minutes_tens = document.querySelector("[data-minutes-tens]");
        const minutes_ones = document.querySelector("[data-minutes-ones]");
        const seconds_tens = document.querySelector("[data-seconds-tens]");
        const seconds_ones = document.querySelector("[data-seconds-ones]");



        function flipAllCards(time) {
            const seconds = time % 60;
            const minutes = Math.floor(time / 60) % 60;
            const hours = Math.floor(time / 3600) % 24;
            const days = Math.floor(time / 86400);

            flip(days_tens, Math.floor(days / 10));
            flip(days_ones, days % 10);
            flip(hours_tens, Math.floor(hours / 10));
            flip(hours_ones, hours % 10);
            flip(minutes_tens, Math.floor(minutes / 10));
            flip(minutes_ones, minutes % 10);
            flip(seconds_tens, Math.floor(seconds / 10));
            flip(seconds_ones, seconds % 10);
        }

        function flip(flipCard, newNumber) {
            const topHalf = flipCard.querySelector(".top");
            const bottomHalf = flipCard.querySelector(".bottom");
            const startNumber = parseInt(topHalf.textContent);
            if (newNumber === startNumber) return;

            const topFlip = document.createElement("div");
            topFlip.classList.add("top-flip");
            const bottomFlip = document.createElement("div");
            bottomFlip.classList.add("bottom-flip");

            topHalf.textContent = startNumber;
            bottomHalf.textContent = startNumber;
            topFlip.textContent = startNumber;
            bottomFlip.textContent = newNumber;

            topFlip.addEventListener("animationstart", e => {
                topHalf.textContent = newNumber;
            });

            topFlip.addEventListener("animationend", e => {
                topFlip.remove();
            });

            bottomFlip.addEventListener("animationend", e => {
                bottomHalf.textContent = newNumber;
                bottomFlip.remove();
            });
            flipCard.append(topFlip, bottomFlip);
        }

        function Fire(){
            var myDiv = document.querySelector('.container');
            var myTitle = document.querySelector('.title');
            var myStartFireButton = document.querySelector('.isSpringTrue');
            var fireDiv = document.querySelector('.Firecontainer');
            // myDiv.style.visibility = 'hidden';
            myDiv.parentNode.removeChild(myDiv);
            //myTitle.style.visibility = 'hidden';
            myTitle.parentNode.removeChild(myTitle);
            document.body.style.backgroundColor = 'black';
            document.body.style.backgroundImage = 'url(./透明.png)';
            myStartFireButton.style.visibility = 'visible';
        }

        function HiddenFire(){
            var myStartFireButton = document.querySelector('.isSpringTrue');
            myStartFireButton.style.visibility = 'hidden';
        }

        function LoadScript(){
            var fscreen = document.createElement('script');
            fscreen.src = './js/fscreen.js';
            document.head.appendChild(fscreen);
            var Stage = document.createElement('script');
            Stage.src = './js/Stage.js';
            document.head.appendChild(Stage);
            var myMath1 = document.createElement('script');
            myMath1.src = './js/MyMath.js';
            document.head.appendChild(myMath1);
            var script = document.createElement('script');
            script.src = './js/script.js';
            document.head.appendChild(script);
            
        }

        function increaseFont(){
            var divText = document.querySelector('page_two hide');
            divText.style.fontSize = "2vw";
            runonce++;
        }

