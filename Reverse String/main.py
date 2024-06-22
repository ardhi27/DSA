stringText = "abcdefffgh"

result = []
c = "d"

for i, v in enumerate(stringText):
    result.append(v)
    if v == 'd':
        break

remainingString = stringText[stringText.index('d') + 1:] 
result.reverse()
resultJoin = ''.join(result)
print(resultJoin + remainingString)