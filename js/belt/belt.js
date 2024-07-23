'use strict'

let showForm = document.querySelector("#submitBelt");
const startForm = document.querySelector("#startForm");
//^^ where we want FORM to go


showForm.addEventListener("click", function (e) {
    e.preventDefault();


    let whatNumberFormItIs = document.getElementById("formNum").innerText;
    // console.log("Before numz++ (form): " + whatNumberFormItIs);
    whatNumberFormItIs++;
    // console.log("AFTER numz++ (form): " + whatNumberFormItIs);
    const getNewFormNumber = document.querySelector("#formNum");
    // console.log(getNewFormNumber);
    const setNewFormNumber = (getNewFormNumber.innerText = whatNumberFormItIs);
    // console.log(setNewFormNumber);
    // console.log("Form number is: " + whatNumberFormItIs);

    // console.dir(e.target);
    // console.log(e);
    // console.dir(e);
    // console.dir(e.path);

    const getBeltStripesClasses = document.getElementById("beltSet").innerHTML;
    // console.log(getBeltStripesClasses);
    const setBeltStripesClasses = document.createElement("form");
    console.log(setBeltStripesClasses);
    setBeltStripesClasses.setAttribute("id", `addedForm-${setNewFormNumber}`);
    //RIIIIIITE HER
    setBeltStripesClasses.innerHTML = getBeltStripesClasses;
    startForm.append(setBeltStripesClasses);

    const getSubFormDiv = document.querySelector(`#addedForm-${setNewFormNumber}`);
    console.log(getSubFormDiv);
    const sure = document.querySelector(".divFormSub").innerHTML;
    // console.log(sure);
    const newby = document.createElement("div");
    console.log(newby);
    newby.setAttribute("id", `#divForSubmitForm-${setNewFormNumber}`);
    newby.innerHTML = sure;
    getSubFormDiv.append(newby);

    const boo = document.getElementById(`#divForSubmitForm-${setNewFormNumber}`);
    console.log(boo);
    const surely = document.querySelector(".buttSetBelt").innerHTML;
    // console.log(surely);
    const booby = document.createElement("button");
    console.log(booby);
    booby.setAttribute("id", `#submitForm-${setNewFormNumber}`);
    booby.innerHTML = surely;
    boo.append(booby);


    const burley = document.querySelector(".subzeroNum").innerHTML;
    console.log(burley);
    const gooby = document.createElement("span");
    console.log(gooby);
    gooby.setAttribute("id", `#subNum-${setNewFormNumber}`);
    gooby.innerHTML = burley;
    boo.append(gooby);

    console.dir(e);

    console.dir(e);



    const yoloz = document.querySelector(`#addedForm-${setNewFormNumber}`);
    const getDisplay = document.getElementById("getBelt").innerHTML;
    // console.log(getDisplay);
    const newDisplay = document.createElement("h3");
    console.log(newDisplay);
    newDisplay.setAttribute("id", `newDisplay-${setNewFormNumber}`);
    newDisplay.innerHTML = getDisplay;
    yoloz.append(newDisplay);

    const recluse = `newDisplay-${setNewFormNumber}`.replace("newDisplay-", "");
    console.log(recluse);
    const gettingClass = document.querySelector("#listClasses");
    console.log(gettingClass);
    gettingClass.setAttribute("id", `#listClasses-${recluse}`);


    const gettingStripe = document.querySelector("#listStripes");
    console.log(gettingStripe);
    gettingStripe.setAttribute("id", `#listStripes-${recluse}`);


    const getCounters = document.getElementById("displayBelt").innerHTML;
    // console.log(getCounters);
    const newCountHeading = document.createElement("h4");
    console.log(newCountHeading);
    // newCountHeading.setAttribute("id", "counters");

    newCountHeading.setAttribute("id", `counters-${setNewFormNumber}`);
    newCountHeading.innerHTML = getCounters;
    yoloz.append(newCountHeading);

    // const setClass = document.querySelector("#upOneClick");
    // setClass.setAttribute("id", `#upOneClick-${reduce}`);
    const deduce = `counters-${setNewFormNumber}`.replace("counters-", "");
    console.log(deduce);
    const classAdd = document.querySelector("#classCheck");
    console.log(classAdd);
    classAdd.setAttribute("id", `#classCheck-${deduce}`);

    const stipeChecker = document.querySelector("#stripeCheck");
    stipeChecker.setAttribute("id", `#stripeCheck-${deduce}`);

    const newBeltChecker = document.querySelector("#newBelt");
    newBeltChecker.setAttribute("id", `#newBelt-${deduce}`);

    //GETS BUTTONS AND ADDS TO FORM*********************************
    console.log(yoloz);
    const getButts = document.getElementById("theButts").innerHTML;
    // console.log(getButts);
    const newButtDiv = document.createElement("div");
    console.log(newButtDiv);
    // newButtDiv.setAttribute("id", "countClass");
    newButtDiv.setAttribute("id", `countClass-${setNewFormNumber}`);
    newButtDiv.innerHTML = getButts;
    // buttsHere.append(newButtDiv);
    // newButtsToForm.append(newButtDiv);
    // const buttonsAdded = newButtsToForm.append(newButtDiv);
    const buttonsAdded = yoloz.append(newButtDiv);
    // console.log(buttonsAdded);
    console.log(`countClass-${setNewFormNumber}`);
    // console.log(countClass.length);
    console.dir(`countClass-${setNewFormNumber}`);
    // ^^^^ GETS BUTTONS AND ADDS TO FORM ^^^^^^^^^^^^^^^^^^^^^^^^^

    console.dir(e.path);

    // const grabNew = document.querySelector("#addedForm");
    console.log(`countClass-${setNewFormNumber}`);

    const reduce = `countClass-${setNewFormNumber}`.replace("countClass-", "");
    console.log(reduce);

    const setClass = document.querySelector("#upOneClick");
    console.log(setClass);


    setClass.setAttribute("id", `#upOneClick-${reduce}`);

    const minusClass = document.querySelector("#downOneClick");
    minusClass.setAttribute("id", `#downOneClick-${reduce}`);

    let grabNew = document.querySelector(`#addedForm-${setNewFormNumber}`);

    console.log(grabNew);
    console.dir(e.target);
    const userInputBelt = document.querySelector("#setBelt");
    console.log(userInputBelt);
    const spanChangeBelt = document.querySelector("#listBelt");
    console.log(spanChangeBelt);

    // const userThisInput = document.querySelectorAll("#setStripes");
    // console.log("userThisInput: " + userThisInput);
    const stripeSpan = document.querySelector("#listStripes");
    console.dir(e);
    console.dir(e.path);

    // console.dir(e.path[3]);
    // console.dir(e.path[3].childNodes[5].innerText);

    console.log(stripeSpan);
    const spanChangeClass = document.querySelector("#listClasses");

    const grabClassCounter = document.querySelector("#classCheck");
    console.log(grabClassCounter);
    console.dir(e);
    const deez = document.querySelector(`#newDisplay-${setNewFormNumber}`);
    // console.log(deez);
    // console.dir(deez);
    // console.dir(deez.childNodes[1]);
    const deezerD = deez.childNodes[1];
    // console.log(deezerD);
    // console.dir(deez.childNodes[5]);
    // console.log(deez);
    const stripeToNeWForm = deez.childNodes[5];
    console.log(stripeToNeWForm);
    const classToNewForm = deez.childNodes[9];
    console.log(classToNewForm);
    console.dir(e);

    grabNew.addEventListener("submit", function (e) {
        e.preventDefault();


        console.log(userInputBelt);
        console.dir(e);

        //THIS ADDS A COUNTER TO THE SUBMIT FORM
        let ruby = e.submitter.nextElementSibling.innerText;
        console.log(ruby);
        ruby++;
        console.log(ruby);
        let subAdd = document.getElementById(`#subNum-${setNewFormNumber}`);
        console.log(subAdd);
        let party = (subAdd.innerText = ruby);
        console.log(party);
        //THIS ADDS A COUNTER TO THE SUBMIT FORM ^^^^^^^^^^^^^^^^^^

        console.log(grabNew);
        // console.dir(grabNew);
        console.dir(e);
        console.dir(e.target[2].value);
        let bluey = (deezerD.innerHTML =
            "Belt Color: " + `${e.target[0].value}`);
        console.log(bluey);
        e.target[0].value = "";

        // console.log(spanChangeBelt);

        // console.dir(e);

        // console.log(stripeToNeWForm);
        // console.log(stripeToNeWForm.innerHTML);
        // console.dir(e);
        // console.dir(e.path[0][1].value);

        let striper =
            (stripeToNeWForm.innerText = `# of Stripes: ${e.target[1].value}`);
        e.target[1].value = "";
        console.log(striper);

        // console.log(stripeToNeWForm);
        // console.log(stripeToNeWForm.innerHTML);
        // console.dir(e);
        // console.dir(deez);

        let classer =
            (classToNewForm.innerText = `# of Classes: ${e.target[2].value}`);
        e.target[2].value = "";
        console.log(classer);

        console.log(grabNew);
        // if (party > 1) {
        if (grabNew) {
            document.getElementById(`#submitForm-${setNewFormNumber}`).style.display =
                "none";
            // alert("more than 1");
        }
//WUTANG
        console.dir(e);

        alert(`submit clicked for form# ${setNewFormNumber}`);


        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//

        //^^where we want LI to go
        const beltAdd = document.querySelector("#newBelt");

        // let addClass = document.getElementById("classCheck").innerHTML;

        let addClassez = document.getElementById(`counters-${deduce}`);

        console.log(addClassez);
        console.dir(addClassez.childNodes[7]);
        // let addClass = addClassez.childNodes[7].innerHTML;

        console.dir(e);

        console.dir(grabNew);

        console.log(`counters-${setNewFormNumber}`);
        console.dir(`counters-${setNewFormNumber}`);

        console.log(whatNumberFormItIs);
        console.dir(e);
        console.dir(whatNumberFormItIs);

        setClass.addEventListener("click", function (e) {
            e.preventDefault();
            console.dir(e);


            console.dir(e);

            ///////////////UP CLICK FUNCTIONALITY ------------------------------
            let addClass = document.getElementById(
                `#classCheck-${deduce}`
            ).innerText;

            console.log(addClass);

            addClass++;

            let classAdd = document.getElementById(`#classCheck-${deduce}`);
            classAdd.innerText = addClass;

            console.log(addClass);
            console.log(classAdd);
            ///////////////UP CLICK FUNCTIONALITY^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

            /////////////////////REMOVES THE DISABLE FROM THE DOWN CLICK!!!!!!!
            if (addClass > 0) {
                let addClassped = document.getElementById(
                    `#downOneClick-${reduce}`
                );
                addClassped.disabled = false;
                console.log(addClassped);
            }
            ///////////////REMOVES THE DISABLE FROM THE DOWN CLICK^^^^^^^^^^

            const really = (classAdd.innerText = addClass);
            console.log(really);
            console.log("Up Class: " + addClass);
            // alert("click");
            //button click counter ^^^^^^^^^^

            // const grabClickUp = document.getElementById("classCheck").innerText;
            // console.log(grabClickUp);
            console.log("Classes attended: " + classAdd.innerText);
            console.log(stipeChecker.innerText.replace("# of Stripes: ", ""));
            console.log(newBeltChecker.innerText);

            // const gettingClass =
            // document.querySelector("#listClasses").innerText;
            // document.querySelector(`#listClasses-${recluse}`).innerText;
            // console.log(gettingClass);
            console.log(classer);
            console.dir(e);
            // const getSetClass = gettingClass.replace("# of Classes: ", "");
            const getSetClass = classer.replace("# of Classes: ", "");
            console.log(getSetClass);

            // const getSetStripe =
            // const gettingStripe =
            // document.querySelector("#listStripes").innerText;
            // document.querySelector(`#listStripes-${recluse}`).innerText;
            // console.log(gettingStripe);
            console.log(striper);
            // const getSetStripe = gettingStripe.replace("# of Stripes: ", "");
            const getSetStripe = striper.replace("# of Stripes: ", "");
            console.log(getSetStripe);

            // console.log(stripeAdd);
            // console.dir(e);
            // console.dir(e.path[4].childNodes[9]);
            // console.dir(e.path[4].childNodes[9].childNodes);

            let newLi = document.createElement("li");
            console.log(newLi);
            console.dir(e);
            newLi.setAttribute("id", `newStripeSee-${setNewFormNumber}`);
            newLi.innerText = "Stripe";

            // let newBeltAdd = document.createElement("h3");
            // console.log(newBeltAdd);
            // newBeltAdd.innerText = "New Belt Earned";
            // console.dir(e);

            let newBeltAdd = document.createElement("h3");
            console.log(newBeltAdd);
            newBeltAdd.setAttribute("id", `advanceBelt-${setNewFormNumber}`);
            newBeltAdd.innerText = "New Belt Earned";
            console.dir(e);

            // alert(`up button clicked`);

            console.log(`countClass-${setNewFormNumber}`);

            for (let i = 1; i <= getSetStripe; i++) {
                // for (let i = 1; i <= removedStripeText; i++) {
                // console.log("getSetClass: " + getSetClass);
                console.dir(e);
                console.log(i);
                // console.log("getSetStripe: " + removedStripeText);
                console.log("getSetStripe: " + getSetStripe);

                // const numToGet = i * removedClassText;
                const numToGet = i * getSetClass;

                console.log("This is numToGet: " + numToGet);
                // console.log("This is grabClickUp: " + grabClickUp);

                const timed = getSetClass * getSetStripe;

                const lastNum = classAdd.innerText;
                console.log(lastNum);

                console.log(addClassez);

                if (numToGet == classAdd.innerText) {
                    // console.log(stripeAdd);
                    // yoloz.append(glow);
                    // yoloz.append(newLi);
                    addClassez.append(newLi);

                    console.dir(e);
                    alert("INPUT STUDENTS NAME earned a stripe!");
                    console.log(newLi);
                } else if (timed == lastNum) {
                    // alert("Advance to next belt!");
                    // beltAdd.append(newBeltAdd);
                    addClassez.append(newLi);

                    addClassez.append(newBeltAdd);

                    alert("Advance to next belt!");

                    let stopUp = document.getElementById(
                        `#upOneClick-${reduce}`
                    );
                    stopUp.disabled = true;
                    console.log(stopUp);
                    break;
                }
            }
        });

        let addClassper = document.getElementById(`#downOneClick-${reduce}`);
        addClassper.disabled = true;
        console.log(addClassper);

        const getSetClass = classer.replace("# of Classes: ", "");
        console.log(getSetClass);

        const getSetStripe = striper.replace("# of Stripes: ", "");
        console.log(getSetStripe);

        let removeItTwo = document.getElementById(`advanceBelt-${setNewFormNumber}`);
        console.log(removeItTwo);

        minusClass.addEventListener("click", function (e) {
            e.preventDefault();
            console.log("STRIPE input: " + getSetStripe);
            console.log("CLASS input: " + getSetClass);
            // console.log("NUMtoGET: " + numToGet);

            let removeIt = document.getElementById(`newStripeSee-${setNewFormNumber}`);
            console.log(removeIt);

            let removeItTwo = document.getElementById(`advanceBelt-${setNewFormNumber}`);
            console.log(removeItTwo);

            let subtractClass = document.getElementById(
                `#classCheck-${deduce}`
            ).innerText;

            console.log(subtractClass);
            subtractClass--;
            console.log(subtractClass);

            let classSubtract = document.getElementById(
                `#classCheck-${deduce}`
            );
            classSubtract.innerText = subtractClass;

            const timed = getSetClass * getSetStripe;

            console.dir(e);
            console.dir(e.path);

            for (let i = 1; i <= getSetStripe; i++) {
                console.log("getSetStripe: " + getSetStripe);

                const numToGet = i * getSetClass;
                const lessThan = numToGet - 1;
                console.log(lessThan);

                console.log("This is numToGet: " + numToGet);

                const timed = getSetClass * getSetStripe;

                const lastNum = classAdd.innerText;
                console.log(lastNum);

                console.log(addClassez);
                if (subtractClass == lessThan) {
                    removeIt.remove();
                    console.log(removeIt);
                    console.log(removeItTwo);
                    removeItTwo.remove();
                } else if (timed < lastNum) {
                    console.log(removeItTwo);
                    removeItTwo.remove();
                    // let stopUp = document.getElementById(
                    //     `#upOneClick-${reduce}`
                    // );
                    // stopUp.disabled = true;
                    // console.log(stopUp);
                    break;
                }
            }

            if (subtractClass <= 0) {
                let addClassper = document.getElementById(
                    `#downOneClick-${reduce}`
                );
                addClassper.disabled = true;
                console.log(addClassper);
            } else if (subtractClass < timed) {
                let baddy = document.getElementById(`#upOneClick-${reduce}`);
                baddy.disabled = false;

                console.log(baddy);
            }
        });
    });
});