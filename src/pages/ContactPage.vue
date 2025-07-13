<template>
  <section class="contact-page">
    <div class="container">
      <h1>📬 Contact Us</h1>
      <p class="subtitle">We’d love to hear from you! Please fill out the form below.</p>

      <form @submit.prevent="submitContact" novalidate>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            v-model="contact.name"
            placeholder="Your full name"
            required
          />
        </div>

        <div class="form-group">
          <label for="age">Age</label>
          <input
            id="age"
            type="number"
            v-model.number="contact.age"
            placeholder="Your age"
            min="1"
            required
          />
          <p v-if="ageError" class="error-message">
            Please enter a valid age (numbers only, at least 1).
          </p>
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            type="email"
            v-model="contact.email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="city">City</label>
          <select id="city" v-model="contact.city" required>
            <option disabled value="">Select your city</option>
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <transition name="fade">
        <div v-if="submitted" class="success-message">
          <h3>✅ Message Sent Successfully</h3>
          <p><strong>Name:</strong> {{ savedContact.name }}</p>
          <p><strong>Age:</strong> {{ savedContact.age }}</p>
          <p><strong>Email:</strong> {{ savedContact.email }}</p>
          <p><strong>City:</strong> {{ savedContact.city }}</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      cities: ['Alger', 'Oran', 'Batna', 'Setif', 'Constantine'],
      contact: {
        name: '',
        age: '',
        email: '',
        city: ''
      },
      savedContact: null,
      submitted: false,
      ageError: false
    };
  },
  methods: {
    submitContact() {
      this.ageError = false;

      const { name, age, email, city } = this.contact;

      if (!name || !email || !city) {
        alert('Please fill all the fields correctly.');
        return;
      }

      // Validate age
      if (!Number.isInteger(age) || age < 1) {
        this.ageError = true;
        return;
      }

      this.savedContact = { ...this.contact };
      this.submitted = true;

      this.contact = {
        name: '',
        age: '',
        email: '',
        city: ''
      };
    }
  }
};
</script>


<style scoped>
.contact-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f4f8;
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.container {
  background: white;
  padding: 40px 50px;
  max-width: 480px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 8px;
  font-size: 2.8rem;
  color: #333;
  font-weight: 700;
  text-align: center;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 30px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #444;
}

input,
select {
  width: 100%;
  padding: 12px 14px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1.5px solid #ccc;
  transition: border-color 0.3s ease;
}

input:focus,
select:focus {
  border-color: #00d1b2;
  outline: none;
  box-shadow: 0 0 8px #00d1b2aa;
}

button {
  background-color: #00d1b2;
  color: white;
  font-weight: 700;
  padding: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #00b89c;
}

.success-message {
  margin-top: 32px;
  background-color: #e6fffa;
  border-left: 6px solid #00d1b2;
  padding: 20px 25px;
  border-radius: 8px;
  color: #055160;
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
