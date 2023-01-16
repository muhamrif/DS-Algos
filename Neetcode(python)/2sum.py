print ('lets learn python')


arr1 = [2,7,11,15]
def func(arr, target):
    for i in arr:
        j = i+1
        for j in arr:
            if (i+j==target):
                return [i,j]


print(func(arr1, 9))
   

# func()

