import ipfshttpclient
import argparse

# add sample to blockchain

class blockchain:
	#username="admin"
	#password="nfi3732if82391n1"
	def __init__(self):
		#self.username = username
		#self.password = password
		#self._client = ipfshttpclient.connect(session=True, '/dns/ipfs-api.example.com/tcp/443/https', auth=(username, password))
    		self._client = ipfshttpclient.connect()

	def get_hash(self, sample_file):
			hash = self._client.add(sample_file)['Hash']
			print(self._client.stat(hash))

	def close(self):  # Call this when your done
			self._client.close()
	
	def add_hash(self, sample_file):
			self.sample_file = sample_file
			self._client.add(sample_file)

if "name" == "__main__":
		parser = argparse.ArgumentParser()
		parser.add_argument('-s', "--sample", required=True, help='sample file ', nargs='+')
		parser.add_argument('-a', "--action", required=True, help='put or tacke from blockchain')
		args = parser.parse_args()

		sample, action = parser.sample, parser.action

		if action == "add":
			with ipfshttpclient.connect() as client:
				client.add(f'{sample_file}_report.txt')
			#print(client.stat(hash))
		elif action == "get":
			data = blockchain(sample_file=sample_file)
			data.get_hash()

