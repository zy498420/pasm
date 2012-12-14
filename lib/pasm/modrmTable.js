table = {"reg":[{"ea":"(al|ax|eax|rax|st0|mm0|xmm0)","mod":"11","rm":"000"},{"ea":"(cl|cx|ecx|rcx|st1|mm1|xmm1)","mod":"11","rm":"001"},{"ea":"(dl|dx|edx|rdx|st2|mm2|xmm2)","mod":"11","rm":"010"},{"ea":"(bl|bx|ebx|rbx|st3|mm3|xmm3)","mod":"11","rm":"011"},{"ea":"(ah|sp|esp|rsp|st4|mm4|xmm4)","mod":"11","rm":"100"},{"ea":"(ch|bp|ebp|rbp|st5|mm5|xmm5)","mod":"11","rm":"101"},{"ea":"(dh|si|esi|rsi|st6|mm6|xmm6)","mod":"11","rm":"110"},{"ea":"(bh|di|edi|rdi|st7|mm7|xmm7)","mod":"11","rm":"111"},{"ea":"(r8b|r8w|r8d|r8|st0|mm0|xmm8)","mod":"11","rm":"000","rex":"r"},{"ea":"(r9b|r9w|r9d|r9|st1|mm1|xmm9)","mod":"11","rm":"001","rex":"r"},{"ea":"(r10b|r10w|r10d|r10|st2|mm2|xmm10)","mod":"11","rm":"010","rex":"r"},{"ea":"(r11b|r11w|r11d|r11|st3|mm3|xmm11)","mod":"11","rm":"011","rex":"r"},{"ea":"(r12b|r12w|r12d|r12|st4|mm4|xmm12)","mod":"11","rm":"100","rex":"r"},{"ea":"(r13b|r13w|r13d|r13|st5|mm5|xmm13)","mod":"11","rm":"101","rex":"r"},{"ea":"(r14b|r14w|r14d|r14|st6|mm6|xmm14)","mod":"11","rm":"110","rex":"r"},{"ea":"(r15b|r15w|r15d|r15|st7|mm7|xmm15)","mod":"11","rm":"111","rex":"r"}],"mem":[{"ea":"^(eax)$","mod":"00","rm":"000","bits":32},{"ea":"^(ecx)$","mod":"00","rm":"001","bits":32},{"ea":"^(edx)$","mod":"00","rm":"010","bits":32},{"ea":"^(ebx)$","mod":"00","rm":"011","bits":32},{"ea":"^(sib)$","mod":"00","rm":"100"},{"ea":"^(esi)$","mod":"00","rm":"110","bits":32},{"ea":"^(edi)$","mod":"00","rm":"111","bits":32},{"ea":"^(disp32)","mod":"00","rm":"101","bits":32},{"ea":"^ebp$","mod":"01","rm":"101","bits":32,"disp":"00"},{"ea":"^(ebp)\\+disp8","mod":"01","rm":"101","bits":32},{"ea":"^(ebp)\\+disp32","mod":"10","rm":"101","bits":32},{"ea":"^(rax)$","mod":"00","rm":"000","bits":64},{"ea":"^(rcx)$","mod":"00","rm":"001","bits":64},{"ea":"^(rdx)$","mod":"00","rm":"010","bits":64},{"ea":"^(rbx)$","mod":"00","rm":"011","bits":64},{"ea":"^(rsi)$","mod":"00","rm":"110","bits":64},{"ea":"^(rdi)$","mod":"00","rm":"111","bits":64},{"ea":"^(eip\\+disp32)","mod":"00","rm":"101","bits":32},{"ea":"^(rip\\+disp32)","mod":"00","rm":"101","bits":64},{"ea":"^rbp$","mod":"01","rm":"101","bits":64,"disp":"00"},{"ea":"^(rbp)\\+disp8","mod":"01","rm":"101","bits":64},{"ea":"^(rbp)\\+disp32","mod":"10","rm":"101","bits":64},{"ea":"^(r8d)$","mod":"00","rm":"000","bits":32,"rex":"b"},{"ea":"^(r8)$","mod":"00","rm":"000","bits":64,"rex":"b"},{"ea":"^(r9d)$","mod":"00","rm":"001","bits":32,"rex":"b"},{"ea":"^(r9)$","mod":"00","rm":"001","bits":64,"rex":"b"},{"ea":"^(r10d)$","mod":"00","rm":"010","bits":32,"rex":"b"},{"ea":"^(r10)$","mod":"00","rm":"010","bits":64,"rex":"b"},{"ea":"^(r11d)$","mod":"00","rm":"011","bits":32,"rex":"b"},{"ea":"^(r11)$","mod":"00","rm":"011","bits":64,"rex":"b"},{"ea":"^(r12d)$","mod":"00","rm":"100","bits":32,"rex":"b","sib":"r12d"},{"ea":"^(r12)$","mod":"00","rm":"100","bits":64,"rex":"b","sib":"r12"},{"ea":"^r13$","mod":"01","rm":"101","bits":64,"rex":"b","disp":"00"},{"ea":"^r13d$","mod":"01","rm":"101","bits":32,"rex":"b","disp":"00"},{"ea":"^(r13d)\\+disp8","mod":"01","rm":"101","bits":32,"rex":"b"},{"ea":"^(r13)\\+disp8","mod":"01","rm":"101","bits":64,"rex":"b"},{"ea":"^(r13d)\\+disp32","mod":"10","rm":"101","bits":32,"rex":"b"},{"ea":"^(r13)\\+disp32","mod":"10","rm":"101","bits":64,"rex":"b"},{"ea":"^(r14d)$","mod":"00","rm":"110","bits":32,"rex":"b"},{"ea":"^(r14)$","mod":"00","rm":"110","bits":64,"rex":"b"},{"ea":"^(r15d)$","mod":"00","rm":"111","bits":32,"rex":"b"},{"ea":"^(r15)$","mod":"00","rm":"111","bits":64,"rex":"b"},{"ea":"^(eax)\\+disp8","mod":"01","rm":"000","bits":32},{"ea":"^(ecx)\\+disp8","mod":"01","rm":"001","bits":32},{"ea":"^(edx)\\+disp8","mod":"01","rm":"010","bits":32},{"ea":"^(ebx)\\+disp8","mod":"01","rm":"011","bits":32},{"ea":"^(sib)\\+disp8","mod":"01","rm":"100"},{"ea":"^(esi)\\+disp8","mod":"01","rm":"110","bits":32},{"ea":"^(edi)\\+disp8","mod":"01","rm":"111","bits":32},{"ea":"^(rax)\\+disp8","mod":"01","rm":"000","bits":64},{"ea":"^(rcx)\\+disp8","mod":"01","rm":"001","bits":64},{"ea":"^(rdx)\\+disp8","mod":"01","rm":"010","bits":64},{"ea":"^(rbx)\\+disp8","mod":"01","rm":"011","bits":64},{"ea":"^(rsi)\\+disp8","mod":"01","rm":"110","bits":64},{"ea":"^(rdi)\\+disp8","mod":"01","rm":"111","bits":64},{"ea":"^(r8d)\\+disp8","mod":"01","rm":"000","bits":32,"rex":"b"},{"ea":"^(r8)\\+disp8","mod":"01","rm":"000","bits":64,"rex":"b"},{"ea":"^(r9d)\\+disp8","mod":"01","rm":"001","bits":32,"rex":"b"},{"ea":"^(r9)\\+disp8","mod":"01","rm":"001","bits":64,"rex":"b"},{"ea":"^(r10d)\\+disp8","mod":"01","rm":"010","bits":32,"rex":"b"},{"ea":"^(r10)\\+disp8","mod":"01","rm":"010","bits":64,"rex":"b"},{"ea":"^(r11d)\\+disp8","mod":"01","rm":"011","bits":32,"rex":"b"},{"ea":"^(r11)\\+disp8","mod":"01","rm":"011","bits":64,"rex":"b"},{"ea":"^(r12d)\\+disp8","mod":"01","rm":"100","bits":32,"rex":"b","sib":"r12d"},{"ea":"^(r12)\\+disp8","mod":"01","rm":"100","bits":64,"rex":"b","sib":"r12"},{"ea":"^(r14d)\\+disp8","mod":"01","rm":"110","bits":32,"rex":"b"},{"ea":"^(r14)\\+disp8","mod":"01","rm":"110","bits":64,"rex":"b"},{"ea":"^(r15d)\\+disp8","mod":"01","rm":"111","bits":32,"rex":"b"},{"ea":"^(r15)\\+disp8","mod":"01","rm":"111","bits":64,"rex":"b"},{"ea":"^(eax)\\+disp32","mod":"10","rm":"000","bits":32},{"ea":"^(ecx)\\+disp32","mod":"10","rm":"001","bits":32},{"ea":"^(edx)\\+disp32","mod":"10","rm":"010","bits":32},{"ea":"^(ebx)\\+disp32","mod":"10","rm":"011","bits":32},{"ea":"^(sib)\\+disp32","mod":"10","rm":"100"},{"ea":"^(esi)\\+disp32","mod":"10","rm":"110","bits":32},{"ea":"^(edi)\\+disp32","mod":"10","rm":"111","bits":32},{"ea":"^(rax)\\+disp32","mod":"10","rm":"000","bits":64},{"ea":"^(rcx)\\+disp32","mod":"10","rm":"001","bits":64},{"ea":"^(rdx)\\+disp32","mod":"10","rm":"010","bits":64},{"ea":"^(rbx)\\+disp32","mod":"10","rm":"011","bits":64},{"ea":"^(rsi)\\+disp32","mod":"10","rm":"110","bits":64},{"ea":"^(rdi)\\+disp32","mod":"10","rm":"111","bits":64},{"ea":"^(r8d)\\+disp32","mod":"10","rm":"000","bits":32,"rex":"b"},{"ea":"^(r8)\\+disp32","mod":"10","rm":"000","bits":64,"rex":"b"},{"ea":"^(r9d)\\+disp32","mod":"10","rm":"001","bits":32,"rex":"b"},{"ea":"^(r9)\\+disp32","mod":"10","rm":"001","bits":64,"rex":"b"},{"ea":"^(r10d)\\+disp32","mod":"10","rm":"010","bits":32,"rex":"b"},{"ea":"^(r10)\\+disp32","mod":"10","rm":"010","bits":64,"rex":"b"},{"ea":"^(r11d)\\+disp32","mod":"10","rm":"011","bits":32,"rex":"b"},{"ea":"^(r11)\\+disp32","mod":"10","rm":"011","bits":64,"rex":"b"},{"ea":"^(r12d)\\+disp32","mod":"10","rm":"100","bits":32,"rex":"b","sib":"r12d"},{"ea":"^(r12)\\+disp32","mod":"10","rm":"100","bits":64,"rex":"b","sib":"r12"},{"ea":"^(r14d)\\+disp32","mod":"10","rm":"110","bits":32,"rex":"b"},{"ea":"^(r14)\\+disp32","mod":"10","rm":"110","bits":64,"rex":"b"},{"ea":"^(r15d)\\+disp32","mod":"10","rm":"111","bits":32,"rex":"b"},{"ea":"^(r15)\\+disp32","mod":"10","rm":"111","bits":64,"rex":"b"}],"mem16":[{"ea":"^(bx\\+si|si\\+bx)$","mod":"00","rm":"000","bits":16},{"ea":"^(bx\\+di|di\\+bx)$","mod":"00","rm":"001","bits":16},{"ea":"^(bp\\+si|si\\+bp)$","mod":"00","rm":"010","bits":16},{"ea":"^(bp\\+di|di\\+bp)$","mod":"00","rm":"011","bits":16},{"ea":"^(si)$","mod":"00","rm":"100","bits":16},{"ea":"^(di)$","mod":"00","rm":"101","bits":16},{"ea":"^^disp16$","mod":"00","rm":"110","bits":16},{"ea":"^(bx)$","mod":"00","rm":"111","bits":16},{"ea":"^(bx\\+si|si\\+bx)\\+disp8","mod":"01","rm":"000","bits":16},{"ea":"^(bx\\+di|di\\+bx)\\+disp8","mod":"01","rm":"001","bits":16},{"ea":"^(bp\\+si|si\\+bp)\\+disp8","mod":"01","rm":"010","bits":16},{"ea":"^(bp\\+di|di\\+bp)\\+disp8","mod":"01","rm":"011","bits":16},{"ea":"^(si)\\+disp8","mod":"01","rm":"100","bits":16},{"ea":"^(di)\\+disp8","mod":"01","rm":"101","bits":16},{"ea":"^(bp)\\+disp8","mod":"01","rm":"110","bits":16},{"ea":"^(bx)\\+disp8","mod":"01","rm":"111","bits":16},{"ea":"^(bx\\+si|si\\+bx)\\+(disp16|disp32)","mod":"10","rm":"000","bits":16},{"ea":"^(bx\\+di|di\\+bx)\\+(disp16|disp32)","mod":"10","rm":"001","bits":16},{"ea":"^(bp\\+si|si\\+bp)\\+(disp16|disp32)","mod":"10","rm":"010","bits":16},{"ea":"^(bp\\+di|di\\+bp)\\+(disp16|disp32)","mod":"10","rm":"011","bits":16},{"ea":"^(si)\\+(disp16|disp32)","mod":"10","rm":"100","bits":16},{"ea":"^(di)\\+(disp16|disp32)","mod":"10","rm":"101","bits":16},{"ea":"^(bp)\\+(disp16|disp32)","mod":"10","rm":"110","bits":16},{"ea":"^(bx)\\+(disp16|disp32)","mod":"10","rm":"111","bits":16}],"sib":[{"ea":"^(eax)$","ss":"00","index":"000","bits":32},{"ea":"^(ecx)$","ss":"00","index":"001","bits":32},{"ea":"^(edx)$","ss":"00","index":"010","bits":32},{"ea":"^(ebx)$","ss":"00","index":"011","bits":32},{"ea":"^(ebp)$","ss":"00","index":"101","bits":32},{"ea":"^(esi)$","ss":"00","index":"110","bits":32},{"ea":"^(edi)$","ss":"00","index":"111","bits":32},{"ea":"^(disp32)","ss":"00","index":"100"},{"ea":"^(ebp)\\+disp8","ss":"00","index":"100","bits":32},{"ea":"^(ebp)\\+disp32","ss":"00","index":"100","bits":32},{"ea":"^(rax)$","ss":"00","index":"000","bits":64},{"ea":"^(rcx)$","ss":"00","index":"001","bits":64},{"ea":"^(rdx)$","ss":"00","index":"010","bits":64},{"ea":"^(rbx)$","ss":"00","index":"011","bits":64},{"ea":"^(rbp)$","ss":"00","index":"101","bits":64},{"ea":"^(rsi)$","ss":"00","index":"110","bits":64},{"ea":"^(rdi)$","ss":"00","index":"111","bits":64},{"ea":"^(rbp)\\+disp8","ss":"00","index":"100","bits":64},{"ea":"^(rbp)\\+disp32","ss":"00","index":"100","bits":64},{"ea":"^(r8|r8d)$","ss":"00","index":"000","bits":64,"rex":"x"},{"ea":"^(r9|r9d)$","ss":"00","index":"001","bits":64,"rex":"x"},{"ea":"^(r10|r10d)$","ss":"00","index":"010","bits":64,"rex":"x"},{"ea":"^(r11|r11d)$","ss":"00","index":"011","bits":64,"rex":"x"},{"ea":"^(r12|r12d)$","ss":"00","index":"100","bits":64,"rex":"x"},{"ea":"^(r13|r13d)$","ss":"00","index":"101","bits":64,"rex":"x"},{"ea":"^(r14|r14d)$","ss":"00","index":"110","bits":64,"rex":"x"},{"ea":"^(r15|r15d)$","ss":"00","index":"111","bits":64,"rex":"x"},{"ea":"^(r13|r13d)\\+disp8$","ss":"00","rex":"x"},{"ea":"^(r13|r13d)\\+disp32$","ss":"00","rex":"x"},{"ea":"^(eax)\\*2","ss":"01","index":"000","bits":32},{"ea":"^(ecx)\\*2","ss":"01","index":"001","bits":32},{"ea":"^(edx)\\*2","ss":"01","index":"010","bits":32},{"ea":"^(ebx)\\*2","ss":"01","index":"011","bits":32},{"ea":"^(ebp)\\*2","ss":"01","index":"101","bits":32},{"ea":"^(esi)\\*2","ss":"01","index":"110","bits":32},{"ea":"^(edi)\\*2","ss":"01","index":"111","bits":32},{"ea":"^(rax)\\*2","ss":"01","index":"000","bits":64},{"ea":"^(rcx)\\*2","ss":"01","index":"001","bits":64},{"ea":"^(rdx)\\*2","ss":"01","index":"010","bits":64},{"ea":"^(rbx)\\*2","ss":"01","index":"011","bits":64},{"ea":"^(rbp)\\*2","ss":"01","index":"101","bits":64},{"ea":"^(rsi)\\*2","ss":"01","index":"110","bits":64},{"ea":"^(rdi)\\*2","ss":"01","index":"111","bits":64},{"ea":"^(r8|r8d)\\*2","ss":"01","index":"000","bits":64,"rex":"x"},{"ea":"^(r9|r9d)\\*2","ss":"01","index":"001","bits":64,"rex":"x"},{"ea":"^(r10|r10d)\\*2","ss":"01","index":"010","bits":64,"rex":"x"},{"ea":"^(r11|r11d)\\*2","ss":"01","index":"011","bits":64,"rex":"x"},{"ea":"^(r12|r12d)\\*2","ss":"01","index":"100","bits":64,"rex":"x"},{"ea":"^(r13|r13d)\\*2","ss":"01","index":"101","bits":64,"rex":"x"},{"ea":"^(r14|r14d)\\*2","ss":"01","index":"110","bits":64,"rex":"x"},{"ea":"^(r15|r15d)\\*2","ss":"01","index":"111","bits":64,"rex":"x"},{"ea":"^(r13|r13d)\\+disp8\\*2","ss":"01","rex":"x"},{"ea":"^(r13|r13d)\\+disp32\\*2","ss":"01","rex":"x"},{"ea":"^(eax)\\*4","ss":"10","index":"000","bits":32},{"ea":"^(ecx)\\*4","ss":"10","index":"001","bits":32},{"ea":"^(edx)\\*4","ss":"10","index":"010","bits":32},{"ea":"^(ebx)\\*4","ss":"10","index":"011","bits":32},{"ea":"^(ebp)\\*4","ss":"10","index":"101","bits":32},{"ea":"^(esi)\\*4","ss":"10","index":"110","bits":32},{"ea":"^(edi)\\*4","ss":"10","index":"111","bits":32},{"ea":"^(rax)\\*4","ss":"10","index":"000","bits":64},{"ea":"^(rcx)\\*4","ss":"10","index":"001","bits":64},{"ea":"^(rdx)\\*4","ss":"10","index":"010","bits":64},{"ea":"^(rbx)\\*4","ss":"10","index":"011","bits":64},{"ea":"^(rbp)\\*4","ss":"10","index":"101","bits":64},{"ea":"^(rsi)\\*4","ss":"10","index":"110","bits":64},{"ea":"^(rdi)\\*4","ss":"10","index":"111","bits":64},{"ea":"^(r8|r8d)\\*4","ss":"10","index":"000","bits":64,"rex":"x"},{"ea":"^(r9|r9d)\\*4","ss":"10","index":"001","bits":64,"rex":"x"},{"ea":"^(r10|r10d)\\*4","ss":"10","index":"010","bits":64,"rex":"x"},{"ea":"^(r11|r11d)\\*4","ss":"10","index":"011","bits":64,"rex":"x"},{"ea":"^(r12|r12d)\\*4","ss":"10","index":"100","bits":64,"rex":"x"},{"ea":"^(r13|r13d)\\*4","ss":"10","index":"101","bits":64,"rex":"x"},{"ea":"^(r14|r14d)\\*4","ss":"10","index":"110","bits":64,"rex":"x"},{"ea":"^(r15|r15d)\\*4","ss":"10","index":"111","bits":64,"rex":"x"},{"ea":"^(r13|r13d)\\+disp8\\*4","ss":"10","rex":"x"},{"ea":"^(r13|r13d)\\+disp32\\*4","ss":"10","rex":"x"},{"ea":"^(eax)\\*8","ss":"11","index":"000","bits":32},{"ea":"^(ecx)\\*8","ss":"11","index":"001","bits":32},{"ea":"^(edx)\\*8","ss":"11","index":"010","bits":32},{"ea":"^(ebx)\\*8","ss":"11","index":"011","bits":32},{"ea":"^(ebp)\\*8","ss":"11","index":"101","bits":32},{"ea":"^(esi)\\*8","ss":"11","index":"110","bits":32},{"ea":"^(edi)\\*8","ss":"11","index":"111","bits":32},{"ea":"^(rax)\\*8","ss":"11","index":"000","bits":64},{"ea":"^(rcx)\\*8","ss":"11","index":"001","bits":64},{"ea":"^(rdx)\\*8","ss":"11","index":"010","bits":64},{"ea":"^(rbx)\\*8","ss":"11","index":"011","bits":64},{"ea":"^(rbp)\\*8","ss":"11","index":"101","bits":64},{"ea":"^(rsi)\\*8","ss":"11","index":"110","bits":64},{"ea":"^(rdi)\\*8","ss":"11","index":"111","bits":64},{"ea":"^(r8|r8d)\\*8","ss":"11","index":"000","bits":64,"rex":"x"},{"ea":"^(r9|r9d)\\*8","ss":"11","index":"001","bits":64,"rex":"x"},{"ea":"^(r10|r10d)\\*8","ss":"11","index":"010","bits":64,"rex":"x"},{"ea":"^(r11|r11d)\\*8","ss":"11","index":"011","bits":64,"rex":"x"},{"ea":"^(r12|r12d)\\*8","ss":"11","index":"100","bits":64,"rex":"x"},{"ea":"^(r13|r13d)\\*8","ss":"11","index":"101","bits":64,"rex":"x"},{"ea":"^(r14|r14d)\\*8","ss":"11","index":"110","bits":64,"rex":"x"},{"ea":"^(r15|r15d)\\*8","ss":"11","index":"111","bits":64,"rex":"x"},{"ea":"^(r13|r13d)\\+disp8\\*8","ss":"11","rex":"x"},{"ea":"^(r13|r13d)\\+disp32\\*8","ss":"11","rex":"x"}],"sibReg":[{"ea":"(eax|rax)","base":"000"},{"ea":"(ecx|rcx)","base":"001"},{"ea":"(edx|rdx)","base":"010"},{"ea":"(ebx|rbx)","base":"011"},{"ea":"(esp|rsp)","base":"100"},{"ea":"(ebp|rbp)","base":"101"},{"ea":"(esi|rsi)","base":"110"},{"ea":"(edi|rdi)","base":"111"},{"ea":"(r8d|r8)","base":"000","rex":"b"},{"ea":"(r9d|r9)","base":"001","rex":"b"},{"ea":"(r10d|r10)","base":"010","rex":"b"},{"ea":"(r11d|r11)","base":"011","rex":"b"},{"ea":"(r12d|r12)","base":"100","rex":"b"},{"ea":"(r13d|r13)","base":"101","rex":"b"},{"ea":"(r14d|r14)","base":"110","rex":"b"},{"ea":"(r15d|r15)","base":"111","rex":"b"}]};
for(t in table){for(row in table[t]){table[t][row].ea=new RegExp(table[t][row].ea)}};
if(typeof exports != "undefined") { exports.table = table }