import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Topbar from '../../components/common/Topbar';

const LIGHT = {
  pageBg: '#F9F8F6',
  sidebarBg: '#FFFFFF',
  sidebarBorder: '#E5E7EB',
  chatBg: '#F9F8F6',
  mine: '#E8834A',
  theirs: '#F3F4F6',
  mineText: '#FFFFFF',
  theirText: '#1A1A2E',
  inputBg: '#FFFFFF',
  inputBorder: '#E5E7EB',
  timestamp: '#9CA3AF',
  online: '#2ECC71',
  unread: '#E8834A',
  activeBg: '#FFF4ED',
  activeBorder: '#E8834A',
  hover: '#F9F8F6'
};

const DARK = {
  pageBg: '#1A1A2E',
  sidebarBg: '#16213E',
  sidebarBorder: '#2D3748',
  chatBg: '#1A1A2E',
  mine: '#E8834A',
  theirs: '#2D3748',
  mineText: '#FFFFFF',
  theirText: '#E2E8F0',
  inputBg: '#16213E',
  inputBorder: '#2D3748',
  timestamp: '#6B7280',
  online: '#2ECC71',
  unread: '#E8834A',
  activeBg: '#1E2A3A',
  activeBorder: '#E8834A',
  hover: '#1E2536'
};

const mockConversations = [
  {
    id: 'c1',
    name: 'Rahul Sharma',
    avatar: null,
    online: true,
    lastMessage: 'Spotted near the park, sending photo.',
    lastAt: '2:14 PM',
    unread: 2,
    type: 'direct',
    messages: [
      { id: 'm1', from: 'them', text: 'Hey, is this your Luna?', at: '2:10 PM' },
      { id: 'm2', from: 'me', text: 'Yes, thanks! Can you hold her there?', at: '2:12 PM', read: true }
    ]
  },
  {
    id: 'c2',
    name: 'Relay: Luna',
    avatar: null,
    online: false,
    lastMessage: 'Volunteer en route',
    lastAt: 'Yesterday',
    unread: 0,
    type: 'relay',
    messages: [
      { id: 'r1', from: 'system', text: '🐱 Relay Update — Luna spotted by Rahul S. Status: Volunteer En Route', at: 'Yesterday' }
    ],
    cat: { name: 'Luna' }
  },
  {
    id: 'c3',
    name: 'PawTrace AI',
    avatar: null,
    online: false,
    lastMessage: 'AI match found — 82% confidence',
    lastAt: 'Jun 28',
    unread: 1,
    type: 'ai',
    messages: [
      { id: 'a1', from: 'system', text: '✨ AI Match Found — 82% confidence for Luna', at: 'Jun 28' }
    ]
  }
];

function ConversationItem({ conv, active, onClick }) {
  return (
    <div
      onClick={() => onClick(conv)}
      className={`flex items-center gap-3 p-3 cursor-pointer ${active ? 'bg-[#FFF4ED] border-l-4 border-[#E8834A]' : 'hover:bg-[#F9F8F6]'}`}
    >
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">{conv.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
        {conv.online && <div className="w-2.5 h-2.5 rounded-full bg-[#2ECC71] absolute right-0 bottom-0 border-2 border-white" />}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="font-medium text-sm">{conv.name} {conv.type==='relay' && <span className="ml-2 inline-block text-xs px-2 py-0.5 rounded-full bg-[#1D9E75] text-white">Relay</span>}</div>
          <div className="text-xs text-[#9CA3AF]">{conv.lastAt}</div>
        </div>
        <div className="text-sm text-[#6B7280] truncate">{conv.lastMessage}</div>
      </div>
      {conv.unread>0 && <div className="bg-[#E8834A] text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full">{conv.unread}</div>}
    </div>
  );
}

export default function Messages() {
  const [conversations, setConversations] = useState(mockConversations);
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [filter, setFilter] = useState('all');
  const [showInfo, setShowInfo] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [attachedPhoto, setAttachedPhoto] = useState(null);
  const messagesRef = useRef(null);

  useEffect(()=>{
    // auto-scroll when active changes or messages update
    if(messagesRef.current){
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [activeId, conversations]);

  const activeConv = conversations.find(c=>c.id===activeId) || conversations[0];

  function sendMessage(){
    if(!messageText.trim() && !attachedPhoto) return;
    const newMsg = { id: Date.now().toString(), from: 'me', text: messageText, at: 'Now', read: false };
    setConversations(prev=> prev.map(c=> c.id===activeId ? { ...c, messages: [...c.messages, newMsg], lastMessage: messageText, lastAt: 'Now' } : c));
    setMessageText('');
    setAttachedPhoto(null);
  }

  function attachPhoto(e){
    const file = e.target.files[0];
    if(!file) return;
    const url = URL.createObjectURL(file);
    setAttachedPhoto({ file, url });
  }

  return (
    <div className="flex bg-[#F9F8F6] min-h-screen text-sm">
      <Sidebar />
      <main className="flex-1 p-4">
        <Topbar />
        <div className="flex gap-6 mt-6">
          {/* Left sidebar */}
          <div className="w-80">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">Messages</div>
              <button onClick={()=>setShowNewModal(true)} className="bg-[#E8834A] text-white px-3 py-1 rounded">✎</button>
            </div>
            <div className="mt-3">
                <div className="bg-white rounded-full px-3 py-2 flex items-center gap-2 border border-[#E5E7EB]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 18a8 8 0 1 1 5.293-14.293" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <input placeholder="Search conversations..." className="outline-none text-sm w-full bg-transparent" />
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              {['all','unread','relay'].map(t=> (
                <button key={t} onClick={()=>setFilter(t)} className={`px-4 py-2 rounded-full text-sm ${filter===t? 'bg-[#E8834A] text-white' : 'text-[#6B7280]'} ${filter===t? 'shadow-sm' : ''}`}>{t==='relay'? 'Rescue Relay' : t==='all'? 'All' : 'Unread'}</button>
              ))}
            </div>

            <div className="mt-4 overflow-y-auto" style={{ maxHeight: '72vh' }}>
              {conversations.filter(c=> filter==='all' || (filter==='unread' && c.unread>0) || (filter==='relay' && c.type==='relay')).map(c=> (
                <ConversationItem conv={c} key={c.id} active={c.id===activeId} onClick={(cv)=> setActiveId(cv.id)} />
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 bg-white rounded-2xl border border-[#E5E7EB] flex flex-col">
            <div className="p-3 md:p-4 border-b border-[#E5E7EB] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">{activeConv.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                <div>
                  <div className="font-semibold">{activeConv.name}</div>
                  <div className="text-sm text-[#9CA3AF]">{activeConv.online? 'Online' : 'Last seen recently'}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button title="Info" onClick={()=>setShowInfo(s=>!s)} className="p-2 rounded hover:bg-gray-100">i</button>
                <button className="p-2 rounded hover:bg-gray-100">⋯</button>
              </div>
            </div>

            <div ref={messagesRef} className="p-4 md:p-6 flex-1 overflow-y-auto space-y-4">
              {/* date separator example */}
              <div className="flex items-center justify-center text-sm text-[#9CA3AF] gap-3">
                <div className="h-px bg-[#E5E7EB] flex-1" />
                <div className="px-3">Today</div>
                <div className="h-px bg-[#E5E7EB] flex-1" />
              </div>

              {activeConv.messages.map(m=> (
                m.from==='me' ? (
                  <div key={m.id} className="flex justify-end">
                    <div style={{ maxWidth: '65%' }} className="p-3 bg-[#E8834A] text-white rounded-2xl" >
                      <div className="text-sm">{m.text}</div>
                      <div className="text-xs text-[#FFDAB8] text-right mt-1 opacity-90">{m.at} • ✓✓</div>
                    </div>
                  </div>
                ) : m.from==='them' ? (
                  <div key={m.id} className="flex">
                    <div className="w-10" />
                    <div style={{ maxWidth: '65%' }} className="p-3 bg-[#F3F4F6] text-[#1A1A2E] rounded-2xl">
                      <div className="text-sm">{m.text}</div>
                      <div className="text-xs text-[#9CA3AF] mt-1">{m.at}</div>
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="flex justify-center">
                    <div className="bg-white border-l-4 border-[#1D9E75] rounded p-3 max-w-full">
                      <div className="font-medium">🐱 Relay Update — {activeConv.cat?.name || ''}</div>
                      <div className="text-sm text-[#6B7280]">{m.text}</div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* input bar */}
            <div className="p-4 border-t border-[#E5E7EB] bg-white">
              {attachedPhoto && (
                <div className="mb-2 flex items-center gap-2">
                  <img src={attachedPhoto.url} alt="preview" className="w-16 h-16 object-cover rounded" />
                  <button onClick={()=>setAttachedPhoto(null)} className="text-sm text-[#6B7280]">Remove</button>
                </div>
              )}
              <div className="flex items-center gap-2">
                <label className="p-2 rounded-full bg-white border border-[#E5E7EB] cursor-pointer">
                  📎
                  <input type="file" accept="image/*" onChange={attachPhoto} className="hidden" />
                </label>
                <button className="px-2">🐱</button>
                <textarea value={messageText} onChange={e=>setMessageText(e.target.value)} placeholder="Type a message..." className="flex-1 px-4 py-2 rounded-full border border-[#E5E7EB] bg-white resize-none" rows={1} />
                <button onClick={sendMessage} disabled={!messageText.trim() && !attachedPhoto} className={`w-10 h-10 rounded-full flex items-center justify-center ${(!messageText.trim() && !attachedPhoto) ? 'bg-gray-200 text-gray-400' : 'bg-[#E8834A] text-white'}`}>
                  ➤
                </button>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className={`w-80 transition-transform ${showInfo? 'translate-x-0' : 'translate-x-4 opacity-60'}`}>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">{activeConv.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                <div>
                  <div className="font-semibold">{activeConv.name}</div>
                  <div className="text-sm text-[#9CA3AF]">{activeConv.online? 'Online' : 'Last seen recently'}</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="font-semibold">Shared Media</div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="h-20 bg-gray-100 rounded" />
                  <div className="h-20 bg-gray-100 rounded" />
                  <div className="h-20 bg-gray-100 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New message modal */}
        {showNewModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded p-6 w-1/3">
              <div className="flex justify-between items-center">
                <div className="font-semibold">New Message</div>
                <button onClick={()=>setShowNewModal(false)}>✕</button>
              </div>
              <div className="mt-4">
                <input placeholder="To: type name or area" className="w-full border border-[#E5E7EB] rounded px-3 py-2" />
                <textarea className="w-full border border-[#E5E7EB] rounded px-3 py-2 mt-3" rows={4} placeholder="Message" />
                <div className="mt-3 text-right">
                  <button className="bg-[#E8834A] text-white px-4 py-2 rounded">Send</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
