document.getElementById("getData").addEventListener('click', loadData);

function loadData(){
    //Create an XML Object
    const xml = new XMLHttpRequest();
    //Estab;lish a connection on CRUD Operation(Request Type), Asynchronous true/false
    xml.open('GET', 'data.txt', true);

    // xml.onload = function(){
    //     if(this.status === 200){
    //         console.log("Hello");
    //         document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
    //     }
    // }

    xml.onreadystatechange = function(){
        //console.log('READY State : ', this.readyState);
        if(this.status === 200 && this.readyState === 4){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`;
        }
    }
    //To finalize everything we actually have to send
    xml.send();
}
// HTTP STatuses
// 200: "OK"
// 403: "Forbidden"
// 404: "not Found"

document.getElementById('customer_btn').addEventListener('click', loadCustomerData);

function loadCustomerData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200 && this.readyState === 4){
            const employee = JSON.parse(this.responseText);
            //console.log(employee);
            const output = `
            <ul>
                <li>Name : ${employee.name}</li>
                <li>Salary: ${employee.salary}</li>
                <li>Salary: ${employee.salary}</li>
            </ul>`;
            document.getElementById('json-output').innerHTML = output;
        }
    }

    // employee": {  
    //     "name": "sonoo",   
    //     "salary": 56000,   
    //     "married": true  
    // }
    xhr.send();
};

//loadCustomersData

document.getElementById('customers_btn').addEventListener('click', loadCustomersData);

function loadCustomersData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            //console.log(customers);

            let output = '';

            customers.forEach(element => {
                output += `<ul>
                                <li>Name : ${element.color}</li>
                                <li>Salary: ${element.category}</li>
                                <li>Salary: ${element.type}</li>
                            </ul>`;    
            });
            
            document.getElementById('json-output-customers').innerHTML = output;
        }
    }

    // employee": {  
    //     "name": "sonoo",   
    //     "salary": 56000,   
    //     "married": true  
    // }
    xhr.send();
};