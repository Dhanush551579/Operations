<script>
        function Operations(opt) {
            debugger;
            var a = document.getElementById("txtAVal").value;
            var b = document.getElementById("txtBVal").value;
            var res = "";

            switch (opt) {
                case "+": { res = parseInt(a) + parseInt(b); break; }
                case "-": { res = parseInt(a) - parseInt(b); break; }
                case "*": { res = parseInt(a) * parseInt(b); break; }
                case "/": { res = parseInt(a) / parseInt(b); break; }
                case "%": { res = parseInt(a) % parseInt(b); break; }
                default: { console.log("Invalid Operator...!"); break; }
            }

            document.getElementById("spanRes").innerHTML = "Result : " + res;
        }

        function Add() {
            Operations("+");
        }

        function Sub() {
            Operations("-");
        }

        function Mul() {
            Operations("*");
        }

        function Div() {
            Operations("/");
        }

        function Rem() {
            Operations("%");
        }
    </script>

