
import { View, Text, Image, StyleSheet } from 'react-native';
import Lencana from './Lencana';

export default function KartuBuku({
  judul,
  penulis,
  kategori,
  deskripsi,
  gambar,
}) {
  return (
    <View style={styles.kartu}>
      <Image
        source={gambar}
        style={styles.gambar}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Lencana label={kategori} />

        <Text style={styles.judul}>
          {judul}
        </Text>

        <Text style={styles.penulis}>
          Oleh <Text style={styles.namaPenulis}>{penulis}</Text>
        </Text>

        <Text
          style={styles.deskripsi}
          numberOfLines={2}
        >
          {deskripsi}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#142D4E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  gambar: {
    width: 90,
    height: 125,
    borderRadius: 9,
    backgroundColor: '#E8EDF2',
  },
  info: {
    flex: 1,
    marginLeft: 12,
    alignItems: 'flex-start',
  },
  judul: {
    color: '#142D4E',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 9,
  },
  penulis: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 5,
  },
  namaPenulis: {
    color: '#334155',
    fontWeight: 'bold',
  },
  deskripsi: {
    color: '#64748B',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 7,
  },
});