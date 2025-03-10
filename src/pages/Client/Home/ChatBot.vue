<template>
  <div class="w-96 max-h-[500px] bg-white p-4 rounded-tr-2xl rounded-tl-2xl transition-all duration-300 ease-in-out overflow-y-auto">
    <div class="py-2 border-b border-color-7 flex justify-between items-center max-h-[74px]">
      <div class="flex items-center gap-3">
        <img src="@/assets/images/Avatar_AI.png" alt="AI">
        <div class="text-base font-semibold text-color-1 ">Trợ lý AI</div>
      </div>
      <div class="flex gap-3 items-center">
        <div class="w-9 h-9 rounded-lg border border-color-2 flex justify-center items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99658 10H10.0041" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9998 10H15.0073" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.99976 10H5.00724" stroke="#667085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div @click="handleChatbot" class="w-9 h-9 rounded-lg border border-color-2 flex justify-center items-center cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="flex items-start gap-2">
        <img src="@/assets/images/Avatar_AI.png" alt="AI" class="w-10 h-10">
        <div class="w-full">
          <div class="flex justify-between items-center mb-2">
            <div class="text-sm font-medium text-color-1 ">Trợ lý AI</div>
            <div class="text-xs text-color-6 font-normal">2:20pm</div>
          </div>
          <div class="text-sm bg-color-17 font-normal mb-5 text-color-16 py-[10px] px-[14px] rounded-tr-md rounded-bl-md rounded-br-md border border-color-2">
            Chào bạn! Tôi là Trợ lý AI của bạn, bạn có cần tôi giúp đỡ gì trong công việc không ?
          </div>
          <div class="text-sm bg-color-17 font-normal mb-5 text-color-16 py-[10px] px-[14px] rounded-tr-md rounded-bl-md rounded-br-md border border-color-2">
            Chào bạn! Tôi là Trợ lý AI của bạn, bạn có cần tôi giúp đỡ gì trong công việc không ?
          </div>
          <div class="text-sm bg-color-17 font-normal mb-5 text-color-16 py-[10px] px-[14px] rounded-tr-md rounded-bl-md rounded-br-md border border-color-2">
            Chào bạn! Tôi là Trợ lý AI của bạn, bạn có cần tôi giúp đỡ gì trong công việc không ?
          </div>
          <div class="ml-auto mb-3">
            <div class="text-sm font-medium text-color-1 mb-1">Bạn</div>
            <div class="text-sm text-white font-normal bg-color-4 py-[10px] px-[14px] rounded-tl-md rounded-br-lg rounded-bl-lg">Báo cáo công việc của tôi</div>
          </div>
          <div class="ml-auto mb-3">
            <div class="text-sm font-medium text-color-1 mb-1">Bạn</div>
            <div class="text-sm text-white font-normal bg-color-4 py-[10px] px-[14px] rounded-tl-md rounded-br-lg rounded-bl-lg">Báo cáo công việc của tôi</div>
          </div>
        </div>
      </div>
      <div class="border border-color-4 rounded-xl mt-10">
        <div class="flex justify-between items-center px-3 py-5">
          <input type="text" class="focus:outline-none w-full text-sm text-color-1" placeholder="Nhập nội dung...">
          <div class="flex gap-2 items-center">
            <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9997 22V18.839" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 14.8481V14.8481C9.75662 14.8481 7.93774 13.0218 7.93774 10.7682V6.08095C7.93774 3.82732 9.75662 2 11.9998 2C14.2441 2 16.0619 3.82732 16.0619 6.08095V10.7682C16.0619 13.0218 14.2441 14.8481 11.9998 14.8481Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 10.8007C20 15.2395 16.4188 18.8383 11.9995 18.8383C7.58117 18.8383 4 15.2395 4 10.8007" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_927_16166)">
                <path d="M20.9693 12.0989C20.9948 11.4124 20.6099 10.7608 20.1625 10.218C19.6924 9.64767 19.036 9.05794 18.2772 8.47514C16.7554 7.30627 14.7217 6.08944 12.6578 5.0307C10.5926 3.9713 8.46469 3.0535 6.74451 2.49271C5.8884 2.21362 5.10419 2.01325 4.46591 1.93576C4.14808 1.89717 3.83507 1.88495 3.55268 1.9227C3.28333 1.95871 2.94336 2.05318 2.68318 2.31673C2.00025 3.00852 1.98257 3.96241 2.155 4.78698C2.331 5.6286 2.74287 6.54205 3.20518 7.39726C3.67246 8.26165 4.21878 9.11571 4.696 9.84237C4.72727 9.88999 4.78982 9.98515 4.86647 10.1017C5.15514 10.5408 5.29948 10.7603 5.52168 10.8801C5.74388 10.9999 6.00683 10.9999 6.53273 10.9999L11.7382 11C12.2905 11 12.7382 11.4477 12.7382 12C12.7382 12.5522 12.2905 13 11.7382 13L6.88376 12.9999C6.34771 12.9999 6.07969 12.9999 5.85502 13.1232C5.63036 13.2464 5.48661 13.4719 5.19913 13.923C4.08455 15.6719 3.17682 17.1302 2.65559 18.2009C2.35116 18.8262 2.12926 19.4091 2.06115 19.9345C1.99006 20.4828 2.08057 21.0413 2.48886 21.4873C2.74304 21.765 3.08559 21.8647 3.34991 21.9037C3.62839 21.9448 3.93787 21.9358 4.25126 21.9011C4.88117 21.8313 5.65952 21.6414 6.51166 21.3747C8.22429 20.8387 10.3547 19.9542 12.4327 18.9305C14.5098 17.9072 16.5658 16.7293 18.1211 15.597C18.8968 15.0322 19.5714 14.462 20.0637 13.9116C20.5306 13.3897 20.9447 12.765 20.9693 12.0989Z" fill="url(#paint0_linear_927_16166)"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_927_16166" x1="0.24776" y1="4.75212" x2="33.3235" y2="37.8279" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9054F7"/>
                  <stop offset="1" stop-color="#2E8EF5"/>
                </linearGradient>
                <clipPath id="clip0_927_16166">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div class="bg-color-5 h-8 flex justify-between items-center p-3 rounded-br-xl rounded-bl-xl">
          <div class="flex gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_927_16172)">
                <path d="M7.23127 0.616694C7.7587 0.613508 8.28073 0.722968 8.76246 0.937755C9.23539 1.14862 9.65876 1.45622 10.0054 1.84063C11.5887 1.5134 13.2046 2.23962 14.0109 3.64329C14.2775 4.09842 14.4438 4.60525 14.4987 5.12986C14.5525 5.64451 14.4979 6.16462 14.3385 6.65668C15.4125 7.86392 15.5923 9.62525 14.781 11.0254C14.5199 11.4839 14.1639 11.8813 13.7368 12.1911C13.3175 12.4953 12.8392 12.7081 12.3328 12.8159C11.8238 14.3508 10.3867 15.3872 8.76782 15.3832M7.23127 0.616694C7.23134 0.616694 7.23141 0.616694 7.23148 0.616694L7.23136 0.666694L7.23106 0.616695C7.23113 0.616694 7.2312 0.616694 7.23127 0.616694ZM7.23127 0.616694C5.61331 0.613089 4.17667 1.64859 3.66772 3.18213C3.16129 3.28996 2.68297 3.50276 2.26367 3.80691C1.83657 4.11672 1.48056 4.51416 1.21945 4.97265C0.40733 6.37272 0.586574 8.13533 1.66097 9.3426C1.50129 9.83497 1.44655 10.3555 1.50043 10.8705C1.55531 11.3951 1.72161 11.9019 1.98821 12.3571C2.79451 13.7607 4.4104 14.4869 5.99372 14.1597C6.34026 14.5442 6.76363 14.8518 7.23658 15.0626C7.71834 15.2773 8.2404 15.3866 8.76782 15.3832M8.76782 15.3832C8.76775 15.3832 8.76767 15.3832 8.7676 15.3832L8.76772 15.3332L8.76805 15.3832C8.76798 15.3832 8.7679 15.3832 8.76782 15.3832ZM10.3064 7.55646L10.3064 11.5869C10.3064 11.5869 10.3064 11.587 10.3064 11.587V11.5872H10.2564C10.2569 11.6716 10.235 11.7546 10.1927 11.8276C10.1505 11.9007 10.0896 11.9612 10.0163 12.0029L10.3064 7.55646ZM10.3064 7.55646L11.4646 8.22521V11.6261C11.4628 13.1147 10.2572 14.3217 8.76853 14.3248C8.16171 14.3258 7.57315 14.1215 7.09795 13.7464C7.1057 13.7419 7.11342 13.7373 7.12111 13.7327C7.12125 13.7326 7.12138 13.7325 7.12152 13.7324L10.041 12.0464C10.041 12.0464 10.041 12.0463 10.0411 12.0463L10.3064 7.55646ZM9.53814 11.1151L6.59359 12.8153L9.53814 11.1151ZM9.53814 11.1151V9.77714L6.04791 11.7926C6.04784 11.7926 6.04777 11.7927 6.0477 11.7927L6.04768 11.7927L6.02268 11.7494C5.94988 11.792 5.86707 11.8144 5.78274 11.8144L9.53814 11.1151ZM2.13132 5.51407L2.13122 5.51397C1.39763 6.80294 1.84069 8.44402 3.12538 9.18801L6.07064 10.8897L7.22899 10.2209L3.73875 8.20585C3.73871 8.20583 3.73868 8.2058 3.73864 8.20578C3.6578 8.15965 3.59068 8.09285 3.54415 8.01224C3.49762 7.93164 3.47335 7.84011 3.47382 7.74704M2.13132 5.51407L3.52382 7.74717M2.13132 5.51407L2.13804 5.50239C2.4407 4.97669 2.9118 4.56937 3.47406 4.34554M2.13132 5.51407L3.47502 4.29143M3.47382 7.74704C3.47382 7.74699 3.47382 7.74695 3.47382 7.7469L3.52382 7.74717M3.47382 7.74704V7.74717H3.52382M3.47382 7.74704V4.37329C3.47382 4.36473 3.47392 4.35525 3.47406 4.34554M3.52382 7.74717V4.37329C3.52382 4.35926 3.5241 4.34253 3.5244 4.32608C3.50754 4.3324 3.49076 4.33889 3.47406 4.34554M3.47406 4.34554C3.47419 4.33695 3.47435 4.32817 3.47452 4.31969L3.47456 4.31712C3.47474 4.30799 3.4749 4.29929 3.47502 4.29143M3.47502 4.29143C3.49167 4.28495 3.50839 4.27862 3.52519 4.27246L3.47502 4.29143ZM8.77054 5.77859L9.92888 5.11018L12.8742 6.81052C14.1648 7.55617 14.6072 9.20728 13.8615 10.4979L13.8615 10.4979C13.5582 11.0233 13.087 11.4305 12.5248 11.6547V8.25286V8.25271H12.4748M8.77054 5.77859L12.236 7.83746M8.77054 5.77859L12.2494 7.78746M8.77054 5.77859L12.2494 7.78746M12.4748 8.25271C12.4754 8.16858 12.4537 8.08578 12.4118 8.01281C12.37 7.93984 12.3094 7.87932 12.2364 7.83746H12.236M12.4748 8.25271V11.6741V8.25271ZM12.236 7.83746L12.2364 7.83667L12.261 7.79416L12.2494 7.78746M12.236 7.83746V7.78746H12.2364H12.2494M5.69087 8.44252L4.53222 7.77375V4.37286C4.53312 2.88245 5.7423 1.67463 7.23271 1.67553H7.23274C7.83869 1.67553 8.426 1.88007 8.90109 2.25404C8.89338 2.25852 8.8857 2.26305 8.87806 2.26763C8.87794 2.2677 8.87782 2.26777 8.87771 2.26784L5.95816 3.95397C5.95811 3.954 5.95805 3.95403 5.95799 3.95407C5.87699 4.00006 5.80971 4.0668 5.76307 4.14743C5.71643 4.22807 5.69213 4.31969 5.69267 4.41284M5.69087 8.44252L5.69267 4.41284M5.69087 8.44252L5.69267 4.41284M5.69087 8.44252L5.69267 4.41284M5.69267 4.41284V4.41269L5.74267 4.41271L5.69267 4.41301C5.69267 4.41296 5.69267 4.4129 5.69267 4.41284ZM5.51758 11.7926C5.51762 11.7926 5.51766 11.7926 5.5177 11.7927L6.59354 12.8153C5.30246 13.5587 3.65364 13.1167 2.90706 11.8275L2.89156 11.8007L2.89129 11.8007C2.5987 11.2818 2.48708 10.6806 2.57327 10.0919C2.58174 10.097 2.58995 10.1018 2.59728 10.106L5.51758 11.7926ZM13.0924 4.17552C13.3946 4.69961 13.5115 5.3094 13.4257 5.90682C13.4176 5.90205 13.4098 5.89747 13.4027 5.89337L10.4824 4.20683C10.4824 4.20681 10.4823 4.20678 10.4823 4.20676C10.4018 4.15979 10.3104 4.13503 10.2172 4.13503C10.1241 4.13503 10.0327 4.15977 9.95224 4.20673C9.95218 4.20676 9.95212 4.2068 9.95207 4.20683L6.46183 6.22225V4.8843L9.40642 3.18549C10.6975 2.44072 12.3481 2.88399 13.0924 4.17551L13.0924 4.17552ZM6.46138 7.11234L7.99954 6.22406L9.53768 7.11189V8.88796L7.99953 9.7758L6.46138 8.88796V7.11234Z" fill="#7F56D9" stroke="#7F56D9" stroke-width="0.1"/>
              </g>
              <defs>
                <clipPath id="clip0_927_16172">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="text-sm font-medium text-color-4">Chat GPT4o mini</div>
          </div>
          <div class="flex gap-2 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.33325 6.66671C2.33325 4.15255 2.33325 2.89547 3.16312 2.11442C3.99298 1.33337 5.32863 1.33337 7.99992 1.33337H8.51505C10.6892 1.33337 11.7763 1.33337 12.5312 1.86527C12.7475 2.01766 12.9395 2.19839 13.1015 2.40197C13.6666 3.11249 13.6666 4.13561 13.6666 6.18186V7.87884C13.6666 9.85431 13.6666 10.842 13.354 11.6308C12.8514 12.8991 11.7885 13.8994 10.441 14.3724C9.60285 14.6667 8.55339 14.6667 6.45447 14.6667C5.25509 14.6667 4.6554 14.6667 4.17644 14.4986C3.40645 14.2283 2.79909 13.6566 2.51189 12.932C2.33325 12.4812 2.33325 11.9168 2.33325 10.7879V6.66671Z" stroke="#7F56D9" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M13.6667 8C13.6667 9.22727 12.6717 10.2222 11.4445 10.2222C11.0006 10.2222 10.4773 10.1445 10.0457 10.2601C9.66233 10.3628 9.3628 10.6623 9.26007 11.0457C9.14447 11.4773 9.2222 12.0006 9.2222 12.4445C9.2222 13.6717 8.22727 14.6667 7 14.6667" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.33325 4.66663H9.99992" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.33325 7.33337H7.33325" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text-sm font-medium text-color-4">Prompt mẫu</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    handleChatbot :{
      type : Function,
      required : true
    }
  }
}
</script>