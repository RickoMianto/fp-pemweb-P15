<template>
  <footer class="bg-indigo-950 text-white py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold mb-4">SyariahFund</h3>
          <p class="text-blue-200">
            Platform syariah yang membantu penggalangan dana dengan aman dan terpercaya.
          </p>
        </div>
        <div class="text-center md:text-center">
          <h4 class="text-2xl font-bold mb-4">Statistik Kami</h4>
          <ul class="text-blue-200 space-y-2">
            <li><span class="font-bold">100+</span> Proyek sukses</li>
            <li><span class="font-bold">Rp 1 Miliar+</span> Dana terkumpul</li>
            <li><span class="font-bold">500+</span> Donatur aktif</li>
          </ul>
        </div>
        <div class="text-center md:text-right">
          <h3 class="text-2xl font-bold mb-4">Contact</h3>
          <p class="mb-2 text-blue-200">Email: info@syariahfund.com</p>
          <p class="text-blue-200">Telepon: +6282334628064</p>
          <p class="text-blue-200">Alamat: Gedung ABC, Jl. Berkah No.635, Surabaya</p>
          <div class="mt-4 flex justify-center md:justify-end space-x-4">
            <span class="text-white text-2xl" title="Facebook">
              <i class="fab fa-facebook-square"></i>
            </span>
            <span class="text-white text-2xl" title="Twitter">
              <i class="fab fa-twitter-square"></i>
            </span>
            <span class="text-white text-2xl" title="Instagram">
              <i class="fab fa-instagram-square"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-900 text-center">
        <p class="text-blue-200">
          &copy; {{ new Date().getFullYear() }} SyariahFund. Hak Cipta Dilindungi.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>
