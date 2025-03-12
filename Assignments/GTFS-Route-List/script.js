const fileInput = document.getElementById('fileInput');
const routeForm = document.getElementById('routeForm');
const routeTableBody = document.querySelector('#routeTable tbody');
const routeIdInput = document.getElementById('routeId');
const agencyIdInput = document.getElementById('agencyId');
const routeNameInput = document.getElementById('routeName');
const routeShortNameInput = document.getElementById('routeShortName');
const routeDescInput = document.getElementById('routeDesc');
const routeTypeInput = document.getElementById('routeType');
const searchInput = document.createElement('input');

const ROUTES_KEY = 'gtfsRoutes';

let routes = JSON.parse(localStorage.getItem(ROUTES_KEY)) || [];
renderRoutes();

// Add search input
const container = document.querySelector('.container');
const searchSection = document.createElement('section');
searchSection.innerHTML = `<h2>Search Routes</h2>`;
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search by route name...');
searchInput.addEventListener('input', filterRoutes);
searchSection.appendChild(searchInput);
container.insertBefore(searchSection, container.children[2]);

// Event: File Upload
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const lines = event.target.result.split('\n');
            const headerSkipped = lines.slice(1);
            headerSkipped.forEach(line => {
                const columns = line.split(',');

                const routeId = columns[0]?.trim(); 
                const agencyId = columns[1]?.trim(); 
                const routeShortName = columns[2]?.trim(); 
                const routeName = columns[3]?.trim(); 
                const routeDesc = columns[4]?.trim(); 
                const routeType = columns[5]?.trim(); 

                if (routeId && routeShortName && routeName && !routes.some(route => route.routeId === routeId)) {
                    routes.push({
                        routeId,
                        agencyId,
                        routeShortName,
                        routeName,
                        routeDesc,
                        routeType
                    });
                }
            });
            saveRoutes();
            renderRoutes();
        };
        reader.readAsText(file);
    }
});

// Event: Add Route
routeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = routeIdInput.value.trim();
    const agencyId = document.getElementById('agencyId').value.trim();
    const name = routeNameInput.value.trim();
    const shortName = document.getElementById('routeShortName').value.trim();
    const description = document.getElementById('routeDesc').value.trim();
    const type = document.getElementById('routeType').value.trim();

    if (!id || !agencyId || !name || !shortName || !description || !type) {
        alert('All fields are required.');
        return;
    }

    if (routes.some(route => route.routeId === id)) {
        alert('A route with this ID already exists.');
        return;
    }

    routes.push({ routeId: id, agencyId, routeShortName: shortName, routeName: name, routeDesc: description, routeType: type });
    saveRoutes();
    renderRoutes();

    routeForm.reset();
});

// Function: Render Routes
function renderRoutes() {
    routeTableBody.innerHTML = '';
    const sortedRoutes = routes.sort((a, b) => {
        const routeNameA = a.routeName || ''; 
        const routeNameB = b.routeName || ''; 
        return routeNameA.localeCompare(routeNameB);
    });

    sortedRoutes.forEach((route, index) => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = route.routeId; 
        row.appendChild(idCell);

        const agencyIdCell = document.createElement('td');
        agencyIdCell.textContent = route.agencyId;
        row.appendChild(agencyIdCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = route.routeName;
        row.appendChild(nameCell);

        const shortNameCell = document.createElement('td');
        shortNameCell.textContent = route.routeShortName; 
        row.appendChild(shortNameCell);

        const descCell = document.createElement('td');
        descCell.textContent = route.routeDesc || ''; 
        row.appendChild(descCell);

        const typeCell = document.createElement('td');
        typeCell.textContent = route.routeType;
        row.appendChild(typeCell);

        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => editRoute(index));
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteRoute(index));
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        routeTableBody.appendChild(row);
    });
}

// Function: Filter 
function filterRoutes() {
    const query = searchInput.value.toLowerCase();
    const filteredRoutes = routes.filter(route => route.routeName.toLowerCase().includes(query));

    routeTableBody.innerHTML = '';

    filteredRoutes.forEach((route, index) => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = route.routeId;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = route.routeName;
        row.appendChild(nameCell);

        const shortNameCell = document.createElement('td');
        shortNameCell.textContent = route.routeShortName;
        row.appendChild(shortNameCell);

        const actionsCell = document.createElement('td');
        actionsCell.textContent = 'Actions';
        row.appendChild(actionsCell);

        routeTableBody.appendChild(row);
    });
}

//Edit Route
function editRoute(index) {
    const route = routes[index];
    routeIdInput.value = route.routeId;
    agencyIdInput.value = route.agencyId;
    routeNameInput.value = route.routeName;
    routeShortNameInput.value = route.routeShortName;
    routeDescInput.value = route.routeDesc;
    routeTypeInput.value = route.routeType;

    routes.splice(index, 1);
    saveRoutes();
    renderRoutes();
}

//Delete Route
function deleteRoute(index) {
    routes.splice(index, 1);
    saveRoutes();
    renderRoutes();
}

//Save Routes
function saveRoutes() {
    localStorage.setItem(ROUTES_KEY, JSON.stringify(routes));
}
