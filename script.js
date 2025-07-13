// Translations
const translations = {
    fr: {
        // Header
        headerSubtitle: "Formulaire d'Enregistrement",
        
        // Form fields
        arrival_date: "Date d'arrivée *",
        departure_date: "Date de départ *",
        arrival_time: "Heure d'arrivée approximative",
        
        // Transport
        transport_title: "Transport",
        transport_method: "Moyen de transport",
        transport_select: "Sélectionnez...",
        transport_car: "Véhicule personnel",
        transport_bus: "Bus", 
        transport_plane: "Avion",
        transport_other: "Autre",
        transfer_service: "Service de transfert",
        transfer_pereira: "Taxi depuis l'aéroport de Pereira - 200.000 COP",
        transfer_armenia_airport: "Taxi depuis l'aéroport d'Armenia - 175.000 COP",
        transfer_armenia_bus: "Taxi depuis le terminal de bus d'Armenia - 140.000 COP",
        no_transfer: "Pas de transfert nécessaire",
        
        // Guests
        guest_info_title: "Informations sur les hôtes",
        guest_count: "Nombre d'hôtes:",
        guest_name: "Nom",
        guest_surname: "Prénom", 
        guest_email: "Email",
        guest_passport: "Numéro de passeport",
        guest_nationality: "Nationalité",
        guest_country: "Pays",
        guest_city: "Ville",
        guest_arrival_city: "Ville d'arrivée",
        
        // Preferences
        preferences_title: "Préférences",
        food_allergies: "Allergies alimentaires",
        food_allergies_placeholder: "Décrivez vos allergies alimentaires...",
        sleeping_preference: "Préférence de couchage",
        sleeping_select: "Sélectionnez...",
        sleeping_double: "Lit double",
        sleeping_single: "Lits séparés",
        sleeping_no_pref: "Aucune préférence",
        
        // Actions
        submit_registration: "Envoyer la réservation",
        success_title: "Réservation envoyée !",
        success_message: "Votre réservation a été envoyée avec succès. Vous allez recevoir une confirmation par email.",
        send_whatsapp: "Envoyer via WhatsApp",
        close: "Fermer",
        
        // Validation
        email_required: "L'email est obligatoire pour l'hôte principal",
        dates_invalid: "La date de départ doit être après la date d'arrivée"
    },
    es: {
        // Header
        headerSubtitle: "Formulario de Registro",
        
        // Form fields  
        arrival_date: "Fecha de llegada *",
        departure_date: "Fecha de salida *",
        arrival_time: "Hora aproximada de llegada",
        
        // Transport
        transport_title: "Transporte",
        transport_method: "Medio de transporte",
        transport_select: "Seleccionar...",
        transport_car: "Vehículo personal",
        transport_bus: "Bus",
        transport_plane: "Avión", 
        transport_other: "Otro",
        transfer_service: "Servicio de traslado",
        transfer_pereira: "Taxi desde el aeropuerto de Pereira - 200.000 COP",
        transfer_armenia_airport: "Taxi desde el aeropuerto de Armenia - 175.000 COP",
        transfer_armenia_bus: "Taxi desde la terminal de buses de Armenia - 140.000 COP",
        no_transfer: "No necesito traslado",
        
        // Guests
        guest_info_title: "Información de huéspedes",
        guest_count: "Número de huéspedes:",
        guest_name: "Nombre",
        guest_surname: "Apellido",
        guest_email: "Email", 
        guest_passport: "Número de pasaporte",
        guest_nationality: "Nacionalidad",
        guest_country: "País",
        guest_city: "Ciudad",
        guest_arrival_city: "Ciudad de llegada",
        
        // Preferences
        preferences_title: "Preferencias",
        food_allergies: "Alergias alimentarias",
        food_allergies_placeholder: "Describe tus alergias alimentarias...",
        sleeping_preference: "Preferencia de alojamiento",
        sleeping_select: "Seleccionar...",
        sleeping_double: "Cama doble",
        sleeping_single: "Camas separadas",
        sleeping_no_pref: "Sin preferencia",
        
        // Actions
        submit_registration: "Enviar reserva",
        success_title: "¡Reserva enviada!",
        success_message: "Su reserva ha sido enviada exitosamente. Recibirá una confirmación por email.",
        send_whatsapp: "Enviar vía WhatsApp",
        close: "Cerrar",
        
        // Validation
        email_required: "El email es obligatorio para el huésped principal",
        dates_invalid: "La fecha de salida debe ser posterior a la fecha de llegada"
    },
    en: {
        // Header
        headerSubtitle: "Registration Form",
        
        // Form fields
        arrival_date: "Arrival date *",
        departure_date: "Departure date *", 
        arrival_time: "Approximate arrival time",
        
        // Transport
        transport_title: "Transport",
        transport_method: "Transportation method",
        transport_select: "Select...",
        transport_car: "Personal vehicle",
        transport_bus: "Bus",
        transport_plane: "Plane",
        transport_other: "Other",
        transfer_service: "Transfer service",
        transfer_pereira: "Taxi from Pereira Airport - 200,000 COP",
        transfer_armenia_airport: "Taxi from Armenia Airport - 175,000 COP", 
        transfer_armenia_bus: "Taxi from Armenia Bus Terminal - 140,000 COP",
        no_transfer: "No transfer needed",
        
        // Guests
        guest_info_title: "Guest Information",
        guest_count: "Number of guests:",
        guest_name: "Name",
        guest_surname: "Surname",
        guest_email: "Email",
        guest_passport: "Passport Number",
        guest_nationality: "Nationality", 
        guest_country: "Country",
        guest_city: "City",
        guest_arrival_city: "Arrival City",
        
        // Preferences
        preferences_title: "Preferences",
        food_allergies: "Food allergies",
        food_allergies_placeholder: "Describe your food allergies...",
        sleeping_preference: "Sleeping preference",
        sleeping_select: "Select...",
        sleeping_double: "Double bed",
        sleeping_single: "Separate beds",
        sleeping_no_pref: "No preference",
        
        // Actions
        submit_registration: "Send reservation",
        success_title: "Reservation sent!",
        success_message: "Your reservation has been sent successfully. You will receive a confirmation email.",
        send_whatsapp: "Send via WhatsApp",
        close: "Close",
        
        // Validation
        email_required: "Email is required for the main guest",
        dates_invalid: "Departure date must be after arrival date"
    }
};

// Nationalities list
const nationalities = [
    "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Bolivia", "Brazil", "Bulgaria", "Canada", "Chile", "China", "Colombia", "Croatia", "Czech Republic", "Denmark", "Ecuador", "Egypt", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kenya", "South Korea", "Lebanon", "Malaysia", "Mexico", "Morocco", "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Romania", "Russia", "Saudi Arabia", "South Africa", "Spain", "Sweden", "Switzerland", "Thailand", "Turkey", "Ukraine", "United Kingdom", "United States", "Uruguay", "Venezuela", "Vietnam"
];

// Current language
let currentLanguage = 'fr';
let currentRegistrationData = null;

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Vous devrez remplacer par votre clé EmailJS

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    updateGuestForms();
    setupFormValidation();
    updateLanguage();
});

function initializeLucideIcons() {
    lucide.createIcons();
}

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-500', 'text-white');
        btn.classList.add('text-gray-600');
    });
    
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active', 'bg-blue-500', 'text-white');
    document.querySelector(`[data-lang="${lang}"]`).classList.remove('text-gray-600');
    
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLanguage];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update placeholder texts
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
    
    // Update page title based on language
    document.getElementById('headerSubtitle').textContent = t.headerSubtitle;
    
    // Update nationalities in select options
    updateNationalitySelects();
}

function updateGuestForms() {
    const guestCount = parseInt(document.getElementById('guestCount').value);
    const container = document.getElementById('guestForms');
    
    container.innerHTML = '';
    
    for (let i = 0; i < guestCount; i++) {
        const guestForm = createGuestForm(i);
        container.appendChild(guestForm);
    }
    
    updateNationalitySelects();
}

function createGuestForm(index) {
    const t = translations[currentLanguage];
    const isMainGuest = index === 0;
    
    const div = document.createElement('div');
    div.className = 'border border-gray-200 rounded-lg p-6 space-y-4';
    
    div.innerHTML = `
        <h4 class="text-lg font-semibold text-gray-800">
            ${isMainGuest ? '👤 ' : ''}${t.guest_info_title} ${index + 1}
            ${isMainGuest ? ' (Principal)' : ''}
        </h4>
        
        <div class="grid md:grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                    ${t.guest_name} *
                </label>
                <input type="text" name="guest_${index}_name" required 
                       class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
            </div>
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                    ${t.guest_surname} *
                </label>
                <input type="text" name="guest_${index}_surname" required 
                       class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
            </div>
        </div>
        
        <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
                ${t.guest_email} ${isMainGuest ? '*' : ''}
            </label>
            <input type="email" name="guest_${index}_email" ${isMainGuest ? 'required' : ''} 
                   class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
        </div>
        
        <div class="grid md:grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                    ${t.guest_passport}
                </label>
                <input type="text" name="guest_${index}_passport" 
                       class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
            </div>
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                    ${t.guest_nationality}
                </label>
                <select name="guest_${index}_nationality" 
                        class="nationality-select w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                    <option value="">Sélectionner...</option>
                </select>
            </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                    ${t.guest_country}
                </label>
                <input type="text" name="guest_${index}_country" 
                       class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
            </div>
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                    ${t.guest_city}
                </label>
                <input type="text" name="guest_${index}_city" 
                       class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
            </div>
        </div>
        
        <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
                ${t.guest_arrival_city}
            </label>
            <input type="text" name="guest_${index}_arrival_city" 
                   class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
        </div>
    `;
    
    return div;
}

function updateNationalitySelects() {
    document.querySelectorAll('.nationality-select').forEach(select => {
        const currentValue = select.value;
        select.innerHTML = '<option value="">Sélectionner...</option>';
        
        nationalities.forEach(nationality => {
            const option = document.createElement('option');
            option.value = nationality;
            option.textContent = nationality;
            if (nationality === currentValue) {
                option.selected = true;
            }
            select.appendChild(option);
        });
    });
}

function setupFormValidation() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
}

function validateForm() {
    const t = translations[currentLanguage];
    
    // Check dates
    const arrivalDate = new Date(document.getElementById('arrivalDate').value);
    const departureDate = new Date(document.getElementById('departureDate').value);
    
    if (departureDate <= arrivalDate) {
        alert(t.dates_invalid);
        return false;
    }
    
    // Check main guest email
    const mainGuestEmail = document.querySelector('input[name="guest_0_email"]').value;
    if (!mainGuestEmail) {
        alert(t.email_required);
        return false;
    }
    
    return true;
}

function submitForm() {
    const formData = collectFormData();
    const submitBtn = document.getElementById('submitBtn');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <div class="loading-spinner"></div>
        <span>Envoi en cours...</span>
    `;
    
    // Send email via EmailJS
    sendEmail(formData)
        .then(() => {
            currentRegistrationData = formData;
            showSuccessModal();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Erreur lors de l\'envoi. Veuillez réessayer.');
        })
        .finally(() => {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <i data-lucide="send" class="w-5 h-5"></i>
                <span data-translate="submit_registration">Envoyer la réservation</span>
            `;
            initializeLucideIcons();
        });
}

function collectFormData() {
    const formData = {
        arrivalDate: document.getElementById('arrivalDate').value,
        departureDate: document.getElementById('departureDate').value,
        arrivalTime: document.getElementById('arrivalTime').value,
        transportMethod: document.getElementById('transportMethod').value,
        transferService: document.getElementById('transferService').value,
        foodAllergies: document.getElementById('foodAllergies').value,
        sleepingPreference: document.getElementById('sleepingPreference').value,
        guests: []
    };
    
    const guestCount = parseInt(document.getElementById('guestCount').value);
    
    for (let i = 0; i < guestCount; i++) {
        const guest = {
            name: document.querySelector(`input[name="guest_${i}_name"]`).value,
            surname: document.querySelector(`input[name="guest_${i}_surname"]`).value,
            email: document.querySelector(`input[name="guest_${i}_email"]`).value,
            passport: document.querySelector(`input[name="guest_${i}_passport"]`).value,
            nationality: document.querySelector(`select[name="guest_${i}_nationality"]`).value,
            country: document.querySelector(`input[name="guest_${i}_country"]`).value,
            city: document.querySelector(`input[name="guest_${i}_city"]`).value,
            arrivalCity: document.querySelector(`input[name="guest_${i}_arrival_city"]`).value
        };
        formData.guests.push(guest);
    }
    
    return formData;
}

function sendEmail(formData) {
    const emailContent = generateEmailContent(formData);
    
    const emailParams = {
        to_email: 'votre-email@hotel.com', // Remplacez par votre email
        subject: 'Nouvelle réservation - La Caracola Salento',
        message: emailContent,
        guest_email: formData.guests[0].email,
        reply_to: formData.guests[0].email
    };
    
    // Remplacez 'YOUR_SERVICE_ID' et 'YOUR_TEMPLATE_ID' par vos identifiants EmailJS
    return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams);
}

function generateEmailContent(data) {
    const guestNames = data.guests.map(guest => `${guest.name} ${guest.surname}`).join(', ');
    
    let content = `🏨 NOUVELLE RÉSERVATION - LA CARACOLA SALENTO\n\n`;
    
    // Dates
    content += `📅 DATES\n`;
    content += `• Arrivée: ${data.arrivalDate}\n`;
    content += `• Départ: ${data.departureDate}\n`;
    if (data.arrivalTime) {
        content += `• Heure d'arrivée: ${data.arrivalTime}\n`;
    }
    content += `\n`;
    
    // Transport
    if (data.transportMethod || data.transferService !== 'none') {
        content += `🚗 TRANSPORT\n`;
        if (data.transportMethod) {
            content += `• Moyen: ${getTransportLabel(data.transportMethod)}\n`;
        }
        if (data.transferService !== 'none') {
            content += `• Transfert: ${getTransferLabel(data.transferService)}\n`;
        }
        content += `\n`;
    }
    
    // Guests
    content += `👥 HÔTES (${data.guests.length})\n`;
    content += `• Noms: ${guestNames}\n\n`;
    
    data.guests.forEach((guest, index) => {
        content += `Hôte ${index + 1}: ${guest.name} ${guest.surname}\n`;
        if (guest.email) content += `• Email: ${guest.email}\n`;
        if (guest.passport) content += `• Passeport: ${guest.passport}\n`;
        if (guest.nationality) content += `• Nationalité: ${guest.nationality}\n`;
        if (guest.country) content += `• Pays: ${guest.country}\n`;
        if (guest.city) content += `• Ville: ${guest.city}\n`;
        if (guest.arrivalCity) content += `• Ville d'arrivée: ${guest.arrivalCity}\n`;
        content += `\n`;
    });
    
    // Preferences
    if (data.foodAllergies || data.sleepingPreference) {
        content += `⚙️ PRÉFÉRENCES\n`;
        if (data.foodAllergies) {
            content += `• Allergies: ${data.foodAllergies}\n`;
        }
        if (data.sleepingPreference) {
            content += `• Couchage: ${getSleepingLabel(data.sleepingPreference)}\n`;
        }
    }
    
    return content;
}

function generateWhatsAppMessage(data) {
    return generateEmailContent(data);
}

function getTransportLabel(transport) {
    const labels = {
        car: "Véhicule personnel",
        bus: "Bus",
        plane: "Avion",
        other: "Autre"
    };
    return labels[transport] || transport;
}

function getTransferLabel(transfer) {
    const labels = {
        pereira_airport: "Taxi depuis l'aéroport de Pereira - 200.000 COP",
        armenia_airport: "Taxi depuis l'aéroport d'Armenia - 175.000 COP",
        armenia_bus: "Taxi depuis le terminal de bus d'Armenia - 140.000 COP"
    };
    return labels[transfer] || transfer;
}

function getSleepingLabel(preference) {
    const labels = {
        double_bed: "Lit double",
        single_beds: "Lits séparés",
        no_preference: "Aucune préférence"
    };
    return labels[preference] || preference;
}

function showSuccessModal() {
    document.getElementById('successModal').classList.remove('hidden');
    
    // Setup WhatsApp button
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappMessage = generateWhatsAppMessage(currentRegistrationData);
    const whatsappUrl = `https://wa.me/33669708171?text=${encodeURIComponent(whatsappMessage)}`;
    
    whatsappBtn.onclick = function() {
        window.open(whatsappUrl, '_blank');
    };
    
    initializeLucideIcons();
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
    
    // Reset form
    document.getElementById('registrationForm').reset();
    updateGuestForms();
}