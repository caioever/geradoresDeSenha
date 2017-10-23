import os
import random
import string

tamanho = 12
caracters = string.ascii_letters + string.digits + '!@#$%¨&*()'
random.seed = (os.urandom(1024))

print ''.join(random.choice(caracters) for i in range(tamanho))