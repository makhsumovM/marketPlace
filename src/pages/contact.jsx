

const Contact = () => {
  return (
 
      
      <div className="flex flex-wrap gap-10 justify-center my-32 items-start">
      <div className="flex overflow-hidden gap-2 items-start p-10 bg-white rounded shadow-lg min-w-[240px] w-[350px] max-md:px-5">
        <div className="flex flex-col min-w-[240px] w-[270px]">
          <div className="flex flex-col w-full max-w-[262px]">
            <div className="flex gap-4 items-center self-start text-xl font-medium leading-tight text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2294fbd9f04939aff5db1becfbe77fb51ff3bfaac158ee6057c742697c3f64e0?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square fill-red-500"
              />
              <div className="self-stretch my-auto">Call To Us</div>
            </div>
            <div className="flex flex-col mt-6 w-full text-sm text-black">
              <div>We are available 24/7, 7 days a week.</div>
              <div className="mt-3">Phone: +8801611112222</div>
            </div>
          </div>
          <div className="flex flex-col mt-8 w-full">
            <div className="shrink-0 h-px border border-solid border-black border-opacity-30" />
          </div>
          <div className="flex flex-col mt-8 w-full max-w-[250px]">
            <div className="flex gap-4 items-center self-start text-xl font-medium leading-tight text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ce634fd57696e4af7a0dd0217c81b3d24659ea00c5b91dd9cc701749c73926?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square fill-red-500"
              />
              <div className="self-stretch my-auto">Write To US</div>
            </div>
            <div className="flex flex-col mt-6 w-full text-sm text-black">
              <div className="leading-5">
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div className="mt-3">Emails: customer@exclusive.com</div>
              <div className="mt-3">Emails: support@exclusive.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden gap-2.5 items-start p-10 text-base bg-white rounded shadow-lg min-w-[240px] text-black text-opacity-60 w-[780px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-start w-full tracking-normal whitespace-nowrap max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0">
              <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
 
                  <input className="overflow-hidden flex-1 shrink self-stretch py-4 w-full min-h-[24px] outline-none" placeholder="Name" type="text" />
 
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0">
              <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
 
                  <input type="email" placeholder="Email" className="overflow-hidden flex-1 outline-none shrink self-stretch py-4 w-full min-h-[24px]" />
 
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0">
              <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
 
                  <input type="text"  placeholder="Phone" className="overflow-hidden flex-1 shrink self-stretch py-4 w-full min-h-[24px] outline-none" />
 
 
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8 w-full tracking-normal leading-6 max-md:max-w-full">

          <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20 max-md:max-w-full">
           <textarea
        className="overflow-hidden flex-1 outline-none shrink self-stretch py-4 w-full min-h-[24px]"
        placeholder="Your Massage..."
        rows="5"
        cols="50"
      />
            </div>
          </div>
          <button className="gap-2.5 hover:bg-red-700 self-end px-12 py-4 mt-8 font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
            Send Massage
          </button>
        </div>
      </div>
    </div>
 
  )
}

export default Contact
