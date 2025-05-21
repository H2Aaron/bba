document.addEventListener("DOMContentLoaded", (event) => {
    fetch("./data/data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const main = document.getElementById("main");
            for (let i = 0; i < data.branches.length; i++) {
                const branch = data.branches[i];

                const officeContainer = document.createElement("div");
                officeContainer.className = "container";

                officeHeadline = document.createElement("div");
                officeHeadline.className = "container pt-5";
                officeHeadline.innerHTML = `
                    <h3 class="h3">${branch.name} Office</h2>
                    <hr>
                `
                officeContainer.appendChild(officeHeadline);
                main.appendChild(officeContainer);

                staffContainer = document.createElement("div");
                staffContainer.className = "container";

                staffRow = document.createElement("div");
                staffRow.className = "row";


                for (let j = 0; j < data.staff.length; j++) {
                    const employee = data.staff[j];
                    if (employee.branch === branch.id)
                    {

                        // get info
                        let email = employee.email;
                        if (email === "")
                            email = `${employee.first_name}.${employee.last_name}@bbatn.net`.toLowerCase();

                        console.log(email);

                        staffCard = document.createElement("div");
                        staffCard.className = "col-12 col-md-6 col-xxl-4 d-flex justify-content-center";
                        staffCard.innerHTML = `
                            <div class="card text-dark m-2" style="width: 20rem;">
                                <img src="assets/profile-pics/${employee.first_name.toLowerCase()}-${employee.last_name.toLowerCase()}-profile.png" class="card-img-top" alt="${employee.first_name}">
                                <div class="card-body">
                                    <h5 class="card-title">${employee.first_name} ${employee.last_name}</h5>
                                    <h6 class="card-subtitle text-muted">${data.jobs.find(element => element.id == employee.job_id).title}</h6>
                                    <a href="mailto:${email}" class="card-link">${email}</a>
                                    <!-- <a href="#" class="stretched-link"></a> -->
                                </div>
                            </div>
                        `
                        staffRow.appendChild(staffCard);
                    }
                }

                staffContainer.appendChild(staffRow);
                officeContainer.appendChild(staffContainer);

            }
        })
})