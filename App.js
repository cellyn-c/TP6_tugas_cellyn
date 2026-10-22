
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import KartuBuku from './components/KartuBuku';

const daftarBuku = [
  {
    id: '1',
    judul: 'Atomic Habits',
    penulis: 'James Clear',
    kategori: 'PENGEMBANGAN DIRI',
    deskripsi:
      'Pelajari cara membangun kebiasaan kecil untuk menghasilkan perubahan besar.',
    gambar: {
      uri: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
    },
  },
  {
    id: '2',
    judul: 'Clean Code',
    penulis: 'Robert C. Martin',
    kategori: 'TEKNOLOGI',
    deskripsi:
      'Panduan menulis kode program yang bersih, terstruktur, dan mudah dirawat.',
    gambar: {
      uri: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    },
  },
  {
    id: '3',
    judul: 'The Design of Everyday Things',
    penulis: 'Don Norman',
    kategori: 'DESAIN',
    deskripsi:
      'Memahami hubungan antara desain produk, perilaku manusia, dan kemudahan penggunaan.',
    gambar: {
      uri: 'https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg',
    },
  },
  {
    id: '4',
    judul: 'Thinking, Fast and Slow',
    penulis: 'Daniel Kahneman',
    kategori: 'PSIKOLOGI',
    deskripsi:
      'Mengenal dua sistem berpikir dan bagaimana keduanya memengaruhi keputusan.',
    gambar: {
      uri: 'https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg',
    },
  },
];

export default function App() {
  return (
    <View style={styles.layar}>
      <StatusBar
        backgroundColor="#142D4E"
        barStyle="light-content"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.konten}
      >
        <Header jumlahBuku={daftarBuku.length} />

        <View style={styles.daftar}>
          <Text style={styles.judulBagian}>
            Jelajahi koleksi
          </Text>

          <Text style={styles.subjudul}>
            Bacaan pilihan untuk perjalanan akademikmu.
          </Text>

          {daftarBuku.map((buku) => (
            <KartuBuku
              key={buku.id}
              judul={buku.judul}
              penulis={buku.penulis}
              kategori={buku.kategori}
              deskripsi={buku.deskripsi}
              gambar={buku.gambar}
            />
          ))}

          <Text style={styles.footer}>
            CAMPUS READS · BELAJAR SEPANJANG HAYAT
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layar: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  konten: {
    paddingBottom: 24,
  },
  daftar: {
    paddingHorizontal: 18,
    paddingTop: 24,
  },
  judulBagian: {
    color: '#142D4E',
    fontSize: 21,
    fontWeight: '800',
  },
  subjudul: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 18,
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 12,
    marginBottom: 10,
  },
});