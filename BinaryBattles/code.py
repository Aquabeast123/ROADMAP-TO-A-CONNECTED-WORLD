def solve():
    T = int(input())
    for _ in range(T):
        N = int(input())
        X = list(map(int, input().split()))
        X.sort()

        group_sizes = []
        count = 1
        
        for i in range(1, N):
            if X[i] - X[i-1] <= 2:
                count += 1
            else:
                group_sizes.append(count)
                count = 1
        group_sizes.append(count)

        print(min(group_sizes), max(group_sizes))

solve()