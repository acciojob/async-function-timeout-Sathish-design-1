//your JS code here. If required.
const textinput = document.getElementById("text")
        const delayinput = document.getElementById("delay");
        const btn = document.getElementById("btn");;
        const output = document.getElementById("output");


        btn.addEventListener('click', async () =>{
            const message = textinput.value;
            const delay = Number(delayinput.value);

            output.textContent = "";

            await wait(delay);

            output.textContent = message;
        })

        function wait(ms){
            return new Promise(reslove => setTimeout(reslove,ms))
        }
