function originalDigits(s: string): string {
    const numbers = new Array<number>(10).fill(0);

    for (let ch of s) {
        switch (ch) {
            case 'z': { numbers[0]++; break } // Zero
            case 'w': { numbers[2]++; break } // tWo
            case 'u': { numbers[4]++; break } // foUr
            case 'x': { numbers[6]++; break } // siX
            case 'g': { numbers[8]++; break } // eiGht

            case 'o': { numbers[1]++; break } // One
            case 'h': { numbers[3]++; break } // tHree
            case 'f': { numbers[5]++; break } // Five
            case 's': { numbers[7]++; break } // Seven
            case 'i': { numbers[9]++; break } // nIne
        }
    }

    numbers[1] -= numbers[0] + numbers[2] + numbers[4];
    numbers[3] -= numbers[8];
    numbers[5] -= numbers[4];
    numbers[7] -= numbers[6];
    numbers[9] -= numbers[6] + numbers[8] + numbers[5];

    let res = [];
    for (let i = 0; i < 10; ++i)
        res.push(`${i}`.repeat(numbers[i]));

    return res.join("");
};