<template>
  <div class="min-h-screen bg-gray-900">
    <Navbar />
    <header
      class="flex items-center justify-center text-white"
      style="
        height: 100vh;
        background-image: url('/images/foto1.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
      <div
        class="text-center bg-black bg-opacity-50 p-6 rounded-lg hover:text-blue-200 transition duration-300 ease-in-out"
      >
        <h1 class="text-5xl font-bold mb-4">Welcome to SyariahFund</h1>
        <p class="text-xl mt-2 max-w-2xl mx-auto">
          Platform syariah yang membantu penggalangan dana dengan aman dan terpercaya
        </p>
      </div>
    </header>
    <main class="container mx-auto mt-10 px-4">
      <section id="about" class="mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center text-lime-500">About Us</h2>
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
          <p class="text-lg text-white leading-relaxed">
            SyariahFund adalah solusi modern yang menghubungkan orang-orang untuk bekerja sama
            mencapai tujuan keuangan. Kami berkomitmen untuk menyediakan platform yang mendukung
            transparansi, efisiensi, dan prinsip syariah dalam penggalangan dana.
          </p>
        </div>
      </section>

      <section id="services" class="mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center text-lime-500">Our Service</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-lime-500">Kampanye Dana</h3>
            <p class="text-lg text-white">
              Mulailah penggalangan dana syariah dengan langkah-langkah yang sederhana.
            </p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-lime-500">Keamanan Donasi</h3>
            <p class="text-lg text-white">
              Menyediakan sistem donasi dengan tingkat keamanan tinggi untuk kenyamanan Anda.
            </p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-lime-500">Pelaporan Transparan</h3>
            <p class="text-lg text-white">
              Menyajikan laporan dana secara langsung agar Anda dapat memantau kontribusi Anda.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" class="mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center text-lime-500">Frequently Asked Question</h2>
        <div class="space-y-4">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 class="text-xl font-semibold mb-2 text-lime-500">{{ item.question }}</h3>
            <p class="text-lg text-white">{{ item.answer }}</p>
          </div>
        </div>
      </section>

      <section id="feedback" class="mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center text-lime-500">Feedback</h2>
        <FeedbackForm />
        <div v-if="feedbacks.length" class="mt-6 bg-gray-700 p-8 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-4 text-indigo-600">Masukan Pengguna:</h3>
          <ul class="space-y-4">
            <li
              v-for="(feedback, index) in feedbacks"
              :key="index"
              class="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              <strong class="text-lime-500">{{
                feedback.is_anonymous ? 'Anonymous' : feedback.name
              }}</strong
              >:
              <p class="mt-2 text-white">{{ feedback.message }}</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import FeedbackForm from '@/components/FeedbackForm.vue'
import Footer from '@/components/Footer.vue'
import { getFeedbacks } from '@/services/feedbackService'

export default defineComponent({
  components: { Navbar, FeedbackForm, Footer },
  setup() {
    const feedbacks = ref<any[]>([])
    const faqItems = ref([
      {
        question: 'Bagaimana cara memulai kampanye dana?',
        answer:
          'Buat akun, isi data kampanye sesuai panduan, dan verifikasi identitas. Setelah disetujui, kampanye Anda akan tersedia.',
      },
      {
        question: 'Apakah platform ini memiliki biaya?',
        answer:
          'Kami mengenakan biaya kecil untuk mendukung operasional. Detailnya dapat Anda lihat di halaman Ketentuan Layanan.',
      },
      {
        question: 'Berapa lama waktu pencairan dana?',
        answer:
          'Proses pencairan memerlukan waktu 3-5 hari kerja setelah target kampanye terpenuhi atau selesai.',
      },
    ])

    onMounted(async () => {
      const response = await getFeedbacks()
      feedbacks.value = response.data
    })

    return { feedbacks, faqItems }
  },
})
</script>
