
    function OpenLogin() {
        var Box4 = document.getElementsByClassName('Forgot-box');
        Box4[0].style.display = 'none'
        var Box2 = document.getElementsByClassName('Sign-box');
        Box2[0].style.display = 'none';
        var Box1 = document.getElementsByClassName('Login-box');
        //console.log(Box1)
        Box1[0].style.display = 'block'
    }
    function OpenRegister() {
        var Box4 = document.getElementsByClassName('Forgot-box');
        Box4[0].style.display = 'none'
        var Box1 = document.getElementsByClassName('Login-box');
        console.log(12)
        Box1[0].style.display = 'none'
        var Box2 = document.getElementsByClassName('Sign-box');
        Box2[0].style.display = 'block'
    }
    function LoginHide(e) {
        var Box1 = document.getElementsByClassName('Login-box');
        //console.log(Box1)
        Box1[0].style.display = 'none';
    }
    function RegisterHide(e) {
        var Box2 = document.getElementsByClassName('Sign-box');
        Box2[0].style.display = 'none'
    }
    function ForgotHide(e) {
        console.log(1)

        var Box4 = document.getElementsByClassName('Forgot-box');
        console.log(Box)
        Box4[0].style.display = 'none'
    }
    function Forgotbox(e) {
        console.log(1)
        var Box2 = document.getElementsByClassName('Sign-box');
        Box2[0].style.display = 'none';
        var Box1 = document.getElementsByClassName('Login-box');
        console.log(12)
        Box1[0].style.display = 'none'
        var Box4 = document.getElementsByClassName('Forgot-box');
        Box4[0].style.display = 'block';
    }
