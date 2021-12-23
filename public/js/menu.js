const SERVER_URL = "http://www.happypizza.ir:3010/api/customer/v1";
let baseRoute = SERVER_URL;
let menuTypes = [];

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let fixNumbers =  function(str) {
    str = numberWithCommas(str);
    var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.toString().replace(/[0-9]/g, function(w) {
       return id[+w]
    });
 }

function getMenuTypes(data) {
  let tabList = "";
  data.map((dt, index) => {
    console.log(index);
    tabList += `<li 
        role="presentation" 
        class="text-uppercase tab-link font-weight-normal ${
          !index ? "font-weight-bold tab-link current" : ""
        }"
        data-tab="tab-${index + 1}"
        >
            <a
            href="#tab-${index + 1}" 
            role="tab" 
            data-toggle="tab" 
            ${!index ? 'class="active font-weight-normal"' : ""}
            style="color: black;font-size: 1.2rem;"
            > 
                ${dt}
            </a>
        </li>`;
    return index;
  });
  return tabList;
}

function getMenu(data) {
  let htmlData = "";
  menuTypes.map((item, index) => {
    let group = data.filter((dt) => dt.type.name === item);
    htmlData += `<div 
          role="tabpanel" 
          class="row pt-50 tab-pane fade ${index ? "" : "in active show"}" 
          id="tab-${index + 1}"
          >
              ${getMenuTabs(group)}
          </div>`;
  });
  return htmlData;
}

function getMenuTabs(data) {
  return data.map(
    (dt) =>
      `<div 
      class="col-xl-3 col-lg-3 col-md-4 text-center pt-20 mx-4 pb-4" 
      style="border-bottom: 1px solid #fd9d3e;"
      >
            <div 
            class="menu-img"
            >
                <a 
                href="shop-detail.html"
                >   
                    <img 
                    src="${dt.img}" 
                    alt="menu"
                    class="menu-image"
                    >
                </a>
            </div>
            <a 
            href="shop-detail.html" 
            class="menu-title text-uppercase"  
            style="color: black;"
            >
                ${dt.name}
            </a>
            <p 
            class="menu-des"
            >
                ${dt.description}
            </p>
            <span 
            class="menu-price"
            >
                ${fixNumbers(parseFloat(dt.size[0].price) - parseFloat(dt.size[0].discount))} تومان
            </span>
        </div>`
  );
}

axios
  .get(`${baseRoute}/order/product/type`)
  .then((res) => {
    menuTypes = res.data.data;
    console.log(res.data.data);
    document.getElementById("tabs").innerHTML = getMenuTypes(res.data.data);

    axios
      .get(`${baseRoute}/order/product`)
      .then((res) => {
        console.log(res.data.data);
        document.getElementById("my_menu").innerHTML = getMenu(res.data.data);
      })
      .catch((error) => {
        // if (error.response) handleError(error.response.status);
      });

  })
  .catch((error) => {
    // if (error.response) handleError(error.response.status);
  });
