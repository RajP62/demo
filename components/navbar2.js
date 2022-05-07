function navbar2()
{
    return ` <div id="TopNav">
    <div id="topNavLeft">
        <select name="India" id="country" class="fontSize">
            <option value="" class="fontSize"> INDIA</option>
        </select>
        <button id="CustomerCare" class="fontSize"> CUSTOMER CARE</button>

    </div>

    <div id="topNavRight">
        <span id="topNavRightSpan"><svg xmlns="http://www.w3.org/2000/svg" width="12 " height="12"
                fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg> <a class="fontSize" href="./registar.html">REGISTER</a> </span>
        <span> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                class="bi bi-unlock-fill" viewBox="0 0 16 16">
                <path
                    d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
            </svg><a class="fontSize" href="./login.html">LOGIN</a></span>

    </div>
  
</div>
<hr>
<div id="midNav">
    <div id="midNavleft">
        <a class="hoveringPages" href="./index.html" id="WomenPageBtn">WOMEN</a>
        <a class="hoveringPages" href="./mens.html" id="MenPageBtn">MEN</a>
        <a class="hoveringPages" href="./kids.html" id="KidpageBtn">KIDS</a>
        <div> /</div>
        <a class="hoveringPages" href="" id="DesignArtBtn"> DESIGN+ART</a>

    </div>
    <div id="midNavMid">

        <img src="./image/yooxLogo.png" alt="">
    </div>
    <div id="midNavRight">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"
            viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart"
            viewBox="0 0 16 16">
            <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-bag-dash" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
            <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
    </div>
</div>
<div id="block" style="width:100%; height:30px;background-color: #333333;"><div>`


}
export default navbar2